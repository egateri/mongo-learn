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
  