const main = () => {
    const connectwithElements = (readDate) => {
        const [x, y, z] = readDate;
        console.log(x);
        console.log(y);
        console.log(z);
        $('#tablebody').append(`
        <tr class = "${z.value}">
            <td>${x.value}</td>
            <td>${y.value}</td>
            <td>${z.value} 
             <button name="${z.value}" class="button btn-danger">Delete</button>
            </td>
           
        </tr>
        `);

    }




    console.log('hello')
    $("#form").submit((event) => {
        //check if form is filled
        if ($.trim($("#bookname").val()) === "" ||
            $.trim($("#isbnname").val()) === "" ||
            $.trim($("#authorname").val()) === "") {
            alert('You did not Fill out one of the Fields!');
        }
        else {
            //Prevent default form submit action
            event.preventDefault();
            //REading form values on clicking submit
            const readDate = ($('#form').serializeArray());
            console.log((readDate));
            connectwithElements(readDate);
            //Resetting fields to empty
            $('#form').find('input:text').val('');
        }

        $('#tablebody').on('click', 'button', function (e) {
            $(this).closest('tr').remove()
        })




    });

}
main();