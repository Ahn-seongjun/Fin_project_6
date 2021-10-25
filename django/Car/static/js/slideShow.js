$(function(){
    // 이동한 이미지의 index값 저장(현재위치)
    var movedIndex = 0;

    //슬라이드 패널을 움직여주는 함수
    function moveSlide(index) {
        movedIndex = index;

        //슬라이드 이동
        var moveLeft = -(index*1280);
        $('#slidePanel').animate({'left':moveLeft},'slow');
    }

    //prev버튼 클릭하면 앞으로 이동
    $('#prevButton').on('click',function(){
        if(movedIndex!=0)//첫번째가 아니라면
            movedIndex = movedIndex - 1;
            moveSlide(movedIndex); //인덱스 값 전달
    });
    //next버튼 클릭하면 뒤로 이동
    $('#nextButton').on('click',function(){
        if(movedIndex!=4)//마지막이 아니라면
            movedIndex = movedIndex + 1;
            moveSlide(movedIndex); //인덱스 값 전달
    });
    $('.controlButton').each(function(index) {
        $(this).hover( 
            function(){
                $(this).attr('src','../Image/controlButton2.png');
            },
            function(){
                $(this).attr('src','../Image/controlButton1.png');
            }

        )
    //클릭하면 현재 인덱스 값을 moveslide함수에 전달
    $(this).on('click',function(){
        moveSlide(index);
    });
    
    });
    //초기 슬라이더 위치 랜덤하게 지정
    var randomNumber = Math.floor(Math.random()*5);
    moveSlide(randomNumber);
});

