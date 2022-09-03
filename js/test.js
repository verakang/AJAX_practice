$(document).ready(function () {
    let xhr = new XMLHttpRequest;
    xhr.open('get', 'test.js', true);
    xhr.send(null);

    xhr.onload = function () {
        let str = JSON.parse(xhr.responseText);

        $('.search-btn').click(function (e) {
            // search-input值的抓取

            // 搜尋前先清空內容
            $('.result-item').remove();
            $('.notfound').remove();
            $('th').removeClass('active');
            $('select')

            e.preventDefault();
            let key = $('.input-value').val();
            $('.target>span').text(key);
            $('.target').css("opacity", "1");

            // 撈出含關鍵字的資料
            let count = 0;
            for (i = 0; i < str.length; i++) {
                if (str[i].種類代碼 == "N04") {
                    let item = str[i].company;
                    if (item.indexOf(key) >= 0) {
                        count += 1;
                        $('.result-items').append(`<tr class="result-item"><td>${str[i].company}</td><td>${str[i].info.phone}</td><td>${str[i].works[0].title}</td><td>${str[i].works[1].title}</td><td>${str[i].works[2].title}</td><td>${str[i].works - amount}</td><td>${str[i].likes}</td></tr>`)
                    }
                }
            }
            if (count == 0) {
                $('.result-items').append(`</tr><td colspan="7" class="notfound">查詢不到相關資訊QQ</td></tr>`);
            }
            else {
                $('.result-list').append(`</tr><td colspan="7" class="notfound">查詢不到相關資訊QQ</td></tr>`);
            }
        })
    }
})