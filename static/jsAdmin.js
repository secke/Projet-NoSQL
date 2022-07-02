const boutModif=document.querySelector('#boutModif');
const divForm=document.querySelector('.divForm')
const formulaire=document.querySelector('#form')
const inputs=document.querySelectorAll('.champ1')
const btnModif=document.querySelectorAll('#btnModif')
const btnVal=document.querySelectorAll('#btnVal')
const lignElem=document.querySelector('#lignElem')

inputs.forEach(input=>{
    input.disabled=true
    btnModif.forEach(btm=>btm.addEventListener('click', ()=>{
        input.disabled=false;
    }))
    btnVal.forEach(btv=>btv.addEventListener('click',()=>{
        // fetch()
        input.disabled=true;
    }))

})



boutModif.addEventListener('click', ()=>{
    divForm.style.display="block"

})  






































// $('.filterable .btn-filter').click(function(){
//     var $panel = $(this).parents('.filterable'),
//     $filters = $panel.find('.filters input'),
//     $tbody = $panel.find('.table tbody');
//     if ($filters.prop('disabled') == true) {
//         $filters.prop('disabled', false);
//         $filters.first().focus();
//     } else {
//         $filters.val('').prop('disabled', true);
//         $tbody.find('.no-result').remove();
//         $tbody.find('tr').show();
//     }
// });

// $('.filterable .filters input').keyup(function(e){
//     /* Ignore tab key */
//     var code = e.keyCode || e.which;
//     if (code == '9') return;
    
//     var $input = $(this),
//     inputContent = $input.val().toLowerCase(),
//     $panel = $input.parents('.filterable'),
//     column = $panel.find('.filters th').index($input.parents('th')),
//     $table = $panel.find('.table'),
//     $rows = $table.find('tbody tr');
    
//     console.log(inputContent);
    
//     var $filteredRows = $rows.filter(function(){
//         var value = $(this).find('td').eq(column).text().toLowerCase();
//         return value.indexOf(inputContent) === -1;
//     });
    
//     /* Clean previous no-result if exist */
//     $table.find('tbody .no-result').remove();
    
//     /* Show all rows, hide filtered ones */
//     $rows.show();
//     $filteredRows.hide();
    
//     /* Prepend no-result row if all rows are filtered and there are no results*/
//     if ($filteredRows.length === $rows.length) {
//         $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ $table.find('.filters th').length +'">No results found.</td></tr>'));
//     }
// });


// var activeSystemClass = $('.list-group-item.active');

// //something is entered in search form
// $('#table-search').keyup( function() {
//    var that = this;
//     // affect all table rows on in systems table
//     var tableBody = $('.table-list-search tbody');
//     var tableRowsClass = $('.table-list-search tbody tr');
//     $('.search-sf').remove();
//     tableRowsClass.each( function(i, val) {
    
//         //Lower text for case insensitive
//         var rowText = $(val).text().toLowerCase();
//         var inputText = $(that).val().toLowerCase();
//         console.log(inputText);
        
//         if(inputText != '')
//         {
//             $('.search-query-sf').remove();
//         }
//         else
//         {
//             $('.search-query-sf').remove();
//         }

//         if( rowText.indexOf( inputText ) == -1 )
//         {
//             //hide rows
//             tableRowsClass.eq(i).hide();
            
//         }
//         else
//         {
//             $('.search-sf').remove();
//             tableRowsClass.eq(i).show();
//         }
//     });
//     //all tr elements are hidden
//     if(tableRowsClass.children(':visible').length == 0)
//     {
//         tableBody.append('<tr class="text-center no-result search-sf"><td colspan="6">No results found.</td></tr>');
//     }
// });



// var isEditing = false,
// tempNameValue = "",
// tempDataValue = "";

// $(document).on('click', '.edit', function() {
// var parentRow = $(this).closest('tr'),
//     tableBody = parentRow.closest('tbody'),
//     tdName = parentRow.children('td.name'),
//     tdData = parentRow.children('td.data');

// if (isEditing) {
//     var nameInput = tableBody.find('input[name="name"]'),
//         dataInput = tableBody.find('input[name="data"]'),
//         tdNameInput = nameInput.closest('td'),
//         tdDataInput = dataInput.closest('td'),
//         currentEdit = tdNameInput.parent().find('td.edit');

//     if ($(this).is(currentEdit)) {
//         // Save new values as static html
//         var tdNameValue = nameInput.prop('value'),
//             tdDataValue = dataInput.prop('value');

//         tdNameInput.empty().fadeOut('slow');
//         tdDataInput.empty().fadeOut('slow');

//         tdNameInput.html(tdNameValue).fadeIn('slow');
//         tdDataInput.html(tdDataValue).fadeIn('slow');
//     } else {
//         // Restore previous html values
//         tdNameInput.empty();
//         tdDataInput.empty();

//         tdNameInput.html(tempNameValue).fadeIn('slow');
//         tdDataInput.html(tempDataValue).fadeIn('slow');
//     }
    
    
//     // Display static row
//     currentEdit.html('<i class="fa fa-pencil" aria-hidden="true"></i>').fadeIn('slow');
//     isEditing = false;
// } else {
//     // Display editable input row
//     isEditing = true;
//     $(this).html('<i class="fa fa-floppy-o" aria-hidden="true"></i>').fadeIn('slow');

//      var tdNameValue = tdName.html(),
//         tdDataValue = tdData.html();

//     // Save current html values for canceling an edit
//     tempNameValue = tdNameValue;
//     tempDataValue = tdDataValue;

//     // Remove existing html values
//     tdName.empty();
//     tdData.empty();

//     // Create input forms
//     tdName.html('<div class="form-group input-info"><input type="text" name="name" value="' + tdNameValue + '"></div>').fadeIn('slow');
//     tdData.html('<div class="form-group input-info"><input type="text" name="data" value="' + tdDataValue + '"></div>').fadeIn('slow');
// }
// });



// var index = 0;
// var boomy = true;
// var rowLength = $('.crud tbody tr').length - 1;

// // Handles live/dynamic element events, i.e. for newly created trash buttons
// $(document).on('click', '.trash', function() {
// // Turn off editing if row is current input
// var moon = $(this).closest('tr').next();
// if (isEditing) {
//     var parentRow = $(this).closest('tr'),
//         tableBody = parentRow.closest('tbody'),
//         tdInput = tableBody.find('input').closest('td'),
//         currentEdit = tdInput.parent().find('td.edit'),
//         thisEdit = parentRow.find('td.edit');

//     if (thisEdit.is(thisEdit)) {
//         isEditing = false;
//     }
// }

// // Remove selected row from table
//  $(this).closest('tr').remove().fadeOut('slow');

// // 	while(boomy){
// //   console.log("index: " + index);
// //   console.log("rowLength: " + rowLength);
// //     //update the html of the moved item to the current index
// //   $('.crud tbody tr:nth-child(' + (index + 1) + ')').find('th').html(index + 1);

// //   console.log("th # " + (index + 1) + ": " +  $('.crud tbody tr:nth-child(' + (index + 1) + ')').find('th').html());

// //   console.log("th # " + (index + 1) + ": " + $('.crud tbody tr:nth-child(' + (index + 1) + ')').index());

// //     if ($('.crud tbody tr:nth-child(' + (index + 1) + ')').index() < index) {
// //         //update the items before the re-ordered item
// //         for(var i=index; i > 0; i--){
// //             // $('.crud tbody tr:nth-child(' + i + ')').find('th').html(i - 1);
// //             console.log("true for (" + i + ")" + $('.crud tbody tr:nth-child(' + i + ')').find('th').html(i - 1))
// //         }
// //     }
// //     else {
// //         //update the items after the re-ordered item
// //         for(var i=index+2;i <= $(".crud tbody tr").length; i++){
// //             // $('.crud tbody tr:nth-child(' + i + ')').find('th').html(i-1);
// //             console.log("false for (" + i + ")" + $('.crud tbody tr:nth-child(' + i + ')').find('th').html(i - 1))
// //         }
// //     }
// //     if(index >= rowLength){
// //     boomy = false;
// //   }


// //   index++;
// // }
// var rowIndex = parseInt($(moon).find('th').html()) - 1;
// var rowBefore = parseInt($(moon).prev().find('th').html());
// var rowAfter = parseInt($(moon).next().find('th').html());
// var rowNummy = parseInt($('tbody tr').last().prev().find('th').html()) - 1;

// console.log("rowIndex = " + rowIndex);
// console.log("rowBefore = " + rowBefore);
// console.log("rowAfter = " + rowAfter);

// if((rowIndex - 1) === rowBefore && (rowIndex + 1) === rowAfter ){
// $('tbody tr').first().find('th').html(1);
// $(moon).closest('tr').find('th').html(rowIndex);
// console.log("true : " + $(moon).find('th').html(rowIndex));
// }
// else if((rowIndex - 1) != rowBefore || (rowIndex + 1) != rowAfter ){
// // make current th the number after the before th
// rowIndex = rowBefore + 1;
// console.log('newRowIndex' + rowIndex);
// $(moon).find('th').html(rowIndex);
// $(moon).next().find('th').html(rowIndex + 1);
// console.log("index : " + $(moon).index());
// console.log("index after : " + $(moon).next().index());

// var gummy = $(moon).next().index();
// console.log("gummy = " + gummy);


// console.log("rowNummy = " + rowNummy);
// for(var i = gummy; i <= rowNummy; i++){
  
//   console.log("index of next after ( loop) = " + i);
  
//   console.log($('tbody tr:nth-child('
//    + (i) +')').index());
//   $('tbody tr:nth-child('
//    + (i) +')').find('th').html(i).fadeIn('slow');
//   // $(moon).next().find('th').html(rowIndex + 1);
// }

//   $('tbody tr').first().find('th').html(1);
// }


// });

// $('.new-row').on('click', function() {
// var tableBody = $(this).closest('tbody'),
//     rowNum = parseInt($(this).closest('tbody tr').last().prev().find('th').html());
//     trNew = '<tr>' + 
//             '<th scope="row">' +
//             (rowNum + 1 )+ 
//           '</th>' +
//           '<td class="name">' +
//             '<div class="form-group input-info">' +
//              '<input type="text" name="name" value="" required>' +
//             '</div>' +
//           '</td>' +
//           '<td class=" data">' +
//             '<div class="form-group input-info">' +
//               '<input type="text" name="data" value="" required>' +
//             '</div>' +
//           '</td>' +
//           '<td class="text-center edit">' +
//           ' <i class="fa fa-floppy-o" aria-hidden="true"></i>' +
//           '</td>' +
//           '<td class="text-center trash">' +
//             '<i class="fa fa-ban" aria-hidden="true"></i>' +
//           '</td>' +
//           '</tr>';
// if (isEditing) {
//     var nameInput = tableBody.find('input[name="name"]'),
//         dataInput = tableBody.find('input[name="data"]'),
//         tdNameInput = nameInput.closest('td'),
//         tdDataInput = dataInput.closest('td'),
//         currentEdit = tdNameInput.parent().find('td.edit');

//     // Get current input values for newly created input cases
//     var newNameInput = nameInput.prop('value'),
//         newDataInput = dataInput.prop('value');

//     // Restore previous html values
//     tdNameInput.empty();
//     tdDataInput.empty();

//     tdNameInput.html(newNameInput).fadeIn('slow');
//     tdDataInput.html(newDataInput).fadeIn('slow');

//     // Display static row
//     currentEdit.html('Edit');
// }

// isEditing = true;
// tableBody.find('tr:last').before(trNew).fadeIn('slow');
// });


// // var index = ui.item.index();
// // var start_pos = ui.item.data('start_pos');

