$(function() {

    //左键点击排序，默认从右键排序的顺序中从上到下

    var flagOnclick = 0;

    $('#rightmenu').mousedown(function(e) {

        if (1 == e.which) {
            if (flagOnclick == 0) {
                //按日期升序
                getSortOrderBy("creatdate", "asc");
            }
            if (flagOnclick == 1) {
                //按日期降序
                getSortOrderBy("creatdate", "desc");
            }
            if (flagOnclick == 2) {
                //按文件名升序
                getSortOrderBy("filename", "asc");
            }
            if (flagOnclick == 3) {
                //按文件名降序
                getSortOrderBy("filename", "desc");
            }
            if (flagOnclick == 4) {
                //按文件大小升序
                getSortOrderBy("filesize", "asc");
            }
            if (flagOnclick == 5) {
                //按文件大小降序
                getSortOrderBy("filesize", "desc");
                flagOnclick = 0;
            }
            flagOnclick++;
            return flagOnclick;
            // local.srtage
            //seeeion.strang
            //alert(flagOnclick);
        }
    })  


});