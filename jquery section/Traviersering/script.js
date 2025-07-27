$().ready(function(){
    // let parent= $('li').parent();
    // console.log(parent)
    // $('.li').parentsUntil('.div').css({'border':'1px solid black'})
    // $('.li').parents().css({'border':'1px solid black'})
    // parent.css({'color':'red','background-color':'bisque'})


    //let children=$('ul').children();
    // console.log(children)
    //$('ul').children().css({'border':'1px solid black'})

    // let child=$('div').find('*');
    // console.log(child);
    // child.css({'border':'1px solid black'})

    // let siblings=$('ul').siblings();
    // console.log(siblings)

    // let siblings=$('.item').next().next();
    // console.log(siblings)

    // let siblings=$('.item').nextAll();
    // console.log(siblings)

    //  let siblings=$('.item').nextUntil('.item1');
    // console.log(siblings)

    // let siblings=$('.item1').prevUntil('.item');
    // console.log(siblings)

    // let siblings=$('li').prev();
    // console.log(siblings)

    // let siblings=$('li').prevAll();
    // console.log(siblings)

    // $('li').first().css({'background-color':'red'})

    // $('li').last().css({'background-color':'red'})

    //next day

    $('li').eq(1).css({'color':"red"})
    $('p').eq(2).css({'color':'hotpink'})

    //$('li').filter('.item').css({'font-size':'40px'})

    $('li').not('.item').css({'font-size':'40px'})
})