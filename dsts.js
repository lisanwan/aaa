    // 现在时间
    var nowtime = new Date();
    var inputtime = +new Date('2021-10-8 23:59:59');
    var inputtimes = +new Date('2021-12-1 23:59:59');
    //把毫秒转换为秒
    var time = (inputtime - nowtime) / 1000;
    var times = (inputtimes - nowtime) / 1000;
    // 还剩余的天数
    var d = parseInt(time / 60 / 60 / 24);
    var ds = parseInt(times / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    ds = ds < 10 ? '0' + ds : ds;
    var hh = ds;
    // 打卡的天数
    var j = 100 - d;
    var js = 180 - ds;
    var nian = nowtime.getFullYear();
    var yve = nowtime.getMonth() + 1;
    var ri = nowtime.getDate();
    // var ding = window.open(ai);
    // var b = window.location.assign("https://sctapi.ftqq.com/ SCT49262TO5FTEdA7I8RjELSwY48PhnfB .send?title=" + nian + "年" + yve + "月" + ri + "日&desp=红魔打卡还剩" + d + "天完成            pico neo3还剩打卡" + hh + "天完成");
    // window.open(b);
    window.location.assign("https://sctapi.ftqq.com/ SCT49262TO5FTEdA7I8RjELSwY48PhnfB .send?title=" + nian + "年" + yve + "月" + ri + "日&desp=红魔打卡" + j + "天，还剩" + d + "天完成" + '\n' + '\n' + "pico neo3打卡" + js + "天，还剩" + hh + "天完成");
    btn.addEventListener('click', function() {
            window.location.assign("https://sctapi.ftqq.com/ SCT49262TO5FTEdA7I8RjELSwY48PhnfB .send?title=" + nian + "年" + yve + "月" + ri + "日&desp=红魔打卡还剩" + d + "天完成            pico neo3还剩打卡" + hh + "天完成");
            // b.open();
            setTimeout(b.parent.close(), [60000]);
        })
        // window.open(ai)
    setInterval(function() {
            b.open();
        }, [4000000])
        // setInterval(function() {
        //     b.parent.close()
        // }, [6000])