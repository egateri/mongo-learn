/* jQuery for UI Logic*/
/* Ensure the document is fully Loaded*/
$(document).ready(() => {
    console.log("DOM is ready!");
    /* Toggle elements in WHAT WE DO Section*/
    $(".jQueryPara").click(() => {
      $(".jQueryPara").toggle();
    });
    $(".jQueryHeader").mouseenter(() => {
      $(".jQueryHeader").css("color", "red");
    });
    $(".jQueryHeader").mouseleave(() => {
      $(".jQueryHeader").css("color", "green");
    });
  
    $(".jQueryUl").mouseenter(() => {
      $(".jQueryUl").css("color", "green");
    });
    $(".jQueryUl").mouseleave(() => {
      $(".jQueryUl").css("color", "black");
    });
    $(".jQueryLi").mouseenter(() => {
      $(".jQueryLi").css("color", "black");
    });
    $(".jQueryLi").mouseleave(() => {
      $(".jQueryLi").css("color", "green");
    });
  });
  
  /* Photo delete and Update*/

  $(document).ready(()=>{
    $('.modal').modal();

    $("form").submit(()=>{
        var  name = $('input').val();
        var id = $('form').attr('data-id');
        $.ajax({
            method: 'put',
            url: '/image/'+id,
            headers: {'Content-Type': 'application/json'},
            data: JSON.stringify({'name': name }), 
            error: (err)=>{console.log(err)}
        })
    })
    $('#delete').on('click',()=>{
        var id = $('#delete').attr('data-id');
        $.ajax({
            method: 'delete',
            url: '/image/' + id,
            success: (response)=>{
                window.location.href= '/photo?msg=Image and Record deleted successfully';
            },
            error: (err)=>{
                console.log(err)
            }
        })

    })
})