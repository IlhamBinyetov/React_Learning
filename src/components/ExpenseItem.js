import './ExpenseItem.css';

function ExpenseItem(props){



    return (
    <div className='expense-item'>
        {<div>{props.date.toISOString()}</div>}
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
    </div>
    );

}

export default ExpenseItem;






function saveFilterResult() {
         
    let filter = JSON.parse(`@(Json.Serialize(filter))`);
    $.each(filter, function (a, value) {
        if (typeof (value) == 'object' && value != null) {
            let input = $(`.${a} > li > input`);
            value.forEach(function (a) {
                input.each(function (key, i) {
                    let dataId = $(i).data("id");
                    if (typeof (dataId) == 'string') 
                    {
                        dataId = dataId.split(' ')[0];
                    }
                  
                    if (dataId == a) {
                        console.log(i, dataId, a);
                        $(i).siblings('label').addClass('atis_custom_select_check_box_selected');
                        $(i).prop('checked', true);
                      //  $(i).attr('checked');

                        console.log($(i), 'save result check');
                        let select = $(i).parent().parent().prev().children();
                        select.append(`<option selected value=${a}></option>`);
                    }
                });
            });
        }
    });
}