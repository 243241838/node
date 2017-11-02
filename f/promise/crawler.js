var http = require('http');
var Promise = require('bluebird');
var cheerio = require('cheerio'); //解析html
var baseUrl = 'http://www.imooc.com/learn/';
// var url = 'http://www.imooc.com/learn/348';
var videoIds = [348];
function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    var title = $('.course-infos .w.pr .path span').text();
    var number = $('#main .course-infos .statics.clearfix .static-item.l').eq(0).children().eq(1)
    // courseData = {
    //     title: title,
    //     number: number,
    //     video: [{
    //         chapterTitle: '',
    //         videos: [
    //             {
    //                 title: '',
    //                 id: ''
    //             }
    //         ]
    //     }]
    // }
    var courseData = {
        title: title,
        number: number,
        video: [],
    }
    chapters.each(function(item) {
        var chapter = $(this);
        chapter.find('.chapter-content').text('')
        var chapterTitle = chapter.find('strong').text();
        var videos = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }
        videos.each(function(item) {
            var video = $(this).find('.J-media-item');
            var videoTitle = video.text();
            var id = video.attr('href').split('video/')[1];
            chapterData.videos.push({
                title: videoTitle,
                id: id
            })
        })
        courseData.video.push(chapterData);
    })
    return courseData;
}
function printCourseInfo(courseData) {
    courseData.forEach(function(courseData) {
        console.log(courseData.number + '人学过' + courseData.title + '\n')
    })
    // courseData.video.forEach(function(courseData) {
    //     console.log('###' + courseData.title + '\n')
    //     courseData.forEach(function(item) {
    //         var chapterTitle = item.chapterTitle;
    //         console.log(chapterTitle + '\n');
    //         item.videos.forEach(function(video) {
    //             console.log('【' + video.id + '】' + video.title)
    //         })
    //     })  
    // })
}

//重写爬虫
function getPageAsync(url) {
    return new Promise(function(resolve, reject) {
        console.log('正在爬取' + url)
        http.get(url, function(res) {
            var html = '';
            //触发data事件
            res.on('data', function (data) {
                html += data;
            })
            res.on('end', function () {
                resolve(html)
            })
        }).on('error', function (e) {
            reject(e)
            console.log('出错')
        })
    })
}
var Array = [];
videoIds.forEach(function (id) {
    Array.push(getPageAsync(baseUrl + id));
})
Promise
  .all(Array)
  .then(function(pages) {
      var courseData = [];
      console.log(pages)
      pages.forEach(function(html) {
          var course = filterChapters(html);
          courseData.push(course);
      })
      courseData.sort(function(a, b) {
          return a.number < b.number
      })
      printCourseInfo(courseData)
  })