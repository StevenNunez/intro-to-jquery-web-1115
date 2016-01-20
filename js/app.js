$(document).on('ready', function(){
  // $('.course').on('click', function(){
  //   $(this).find('.details').slideToggle();
  // });
  $('.courses').on('click', '.course', function(){
    $(this).find('.details').slideToggle();
  });
  $('#add-new-course').on('submit', function(event){
    event.preventDefault();
    var courseName = $(this).find('#course-name').val();
    var courseDetails = $(this).find('#course-details').val();
    var template = `<li class="course">
      ${courseName}
      <div class="details">
        ${courseDetails}
      </div>
    </li>`
    // var template = '<li class="course">' +
    //   courseName +
    //   '<div class="details">' +
    //     courseDetails +
    //   '</div>' +
    // '</li>'
    $('.courses').append(template);
    this.reset();
  });
});
