/**
 * To-do List
 */
$ = function (val) {
    var result;
    result = document.querySelector(val);
    return result;
};
var all = function (val) {
    var result = document.querySelectorAll(val);
    return result;
};

function createListItem(value) {
    var listItem,
        closeBtn,
        textContent,
        node,

    listItem = document.createElement("li");
    closeBtn = document.createElement("button");
    textContent = document.createElement("p");
    node = document.createTextNode(value);
    closeBtn.textContent = "X";
    closeBtn.className = "close-btn"
    listItem.className = "list-item"

    textContent.appendChild(node);
    listItem.appendChild(textContent);
    listItem.appendChild(closeBtn);

    return listItem;
}

$("ul").addEventListener("click", function (e) {
    var el = e.target;
    if (el.className == "close-btn") {
        el.parentNode.remove();
        if (countList() >= 1) {
            $("#count").innerHTML = "(" + countList() + ")";
        }
        else {
            $("#count").innerHTML = "";
        }
    }
    console.log(el.tagName);
    if (el.tagName == "LI" || el.tagName == "P") {
        var li = el.closest("li")
        if (li.classList.contains("active")) {
            li.classList.remove("active")
        } else {
            li.classList.add("active")
        }
    }
})
function checkValueExist(values) {
    var lists, result;
    lists = all("#task-list li");
    result = false;
    for (var i = 0; i < lists.length; i++) {
        if (lists[i].querySelector('p').textContent === values) {
            result = true;
            break;
        }
    }
    return result;
}
function countList() {
    var count = 0;
    count = all("#task-list li").length;
    return count;
}

$("#add-task").onclick = function (e) {
    var fistItem,
        listItem;
    if ($("#title").value === "") {
        alert("Empty value are not allowed");
    } else if (!checkValueExist($("#title").value)) {
        listItem = createListItem($("#title").value);
        fistItem = $("#task-list li")

        if (fistItem) {
            $("#task-list").insertBefore(listItem, fistItem);
        }
        else {
            $("#task-list").appendChild(listItem);
        }

        $("#count").innerHTML = "(" + countList() + ")";
        $("#title").value = "";
    }
    else {
        alert("Task Already Exists");
    }
}