$(() => {
    const url = "http://124.222.100.88/indexes/tiaoji/search";

    const view = (response) => {
        $.each(response.hits, (_, item) => {
            const temp =
                `${item.School} - ${item.Des} - ${item.Year}` +
                `${item.AMD ? "" : "<span>专硕</span>"} <br />` +
                `招生人数：${item.HC}` +
                `${item.Same ? "<span>校内调剂</span>" : ""} <br />` +
                `调剂专业：${item.Src.join("、")} <br />` +
                `科目要求：${item.Subject.join("、")} <br />` +
                `<div>分数要求：总分 ${item.Line.Sum} 大分 ${item.Line.Big} 小分 ${item.Line.Sma} </div>` +
                `<span>官网来源：<a href="${item.Link}" target="_blank">${item.Link}</a></span>` +
                `${item.PS == "" ? "" : "<div>备注：" + item.PS + "</div>"}`;
            const k = $("<article class='item'></article>").html(temp);
            $("#show").append(k);
        });
    };

    const msearch = (message) => {
        $("#busy").css("display", "block");
        $(".item").remove();
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify({ q: message }),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: (response) => {
                console.log(response);
                $("#busy").css("display", "none");
                view(response);
            },
        });
    };

    $("#search").keydown((e) => {
        if (e.keyCode == 13) {
            console.log(e.keyCode);
            msearch($("#search").val());
        }
    });
});
