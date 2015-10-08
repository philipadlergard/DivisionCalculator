$(function () {

    var module = {

        Number: null,

        Select:
        {
            Number: "#Number",
            Answer: "#Answer",
            NewNumberBtn: ".btn"
        },

        Url:
        {
            CheckDivisibility: "/Home/CheckDivisibility"
        },

        BindEvents: function () {
            $(module.Select.NewNumberBtn).click(module.GenerateNumber);
        },

        GenerateNumber: function () {
            var number = Math.floor(Math.random() * 100) + 1;
            $(module.Select.Number).text('Is ' + number + ' divisble by 3 or 5?');
            Number = number;
            module.CheckDivisibility();
        },

        CheckDivisibility: function () {
            $.ajax({
                url: module.Url.CheckDivisibility,
                data: { number: Number },
                success: function (data) {
                    module.CreateAnswer(data);
                }
            })
        },

        CreateAnswer: function (data) {
            if (data.response) {
                $(module.Select.Answer).text(data.response);
            }
            else {
                $(module.Select.Answer).text(data.value);
            }
        }
    }

    module.BindEvents();
    module.GenerateNumber();
})