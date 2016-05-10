function getObjects() {
    var val = document.getElementById('input').value;
    var dictLength = obj.subjects.length;

    var result;
    var kq = [];
    for (var i = 0; i < dictLength; i++) {
        var jsonItem = obj.subjects[i];
        for (var j in jsonItem) {
            if (jsonItem[j].indexOf(val) > -1) {
                result = jsonItem;
                result.currentAttr = j;
                kq.push(result);
                break;
            }
        }
    }
    var resultStr = [];
    var dai = kq.length;
    console.log(dai);
    for (var l = 0; l < dai; l++) {
        var kqArray = kq[l];
        for (var k in kqArray) {
            if (k != 'currentAttr' && k != kqArray.currentAttr) {
                resultStr.push(kqArray[k] + '</br>');
            }
        }
    }
    document.getElementById('kq').innerHTML = resultStr;
}

//Date
if (typeof (Storage) !== "undefined") {
    obj = {
        "subjects": [
            {
                "code": "MAE101",
                "EngName": "Mathematics for Engineering",
                "VietName": "Toán kĩ thuật"
            },
             {
                 "code": "MAC101",
                 "EngName": "Advanced Mathematics 1",
                 "VietName": "Toán cao cấp 1"
             },
              {
                  "code": "MAD101",
                  "EngName": "Discrete Mathematics",
                  "VietName": "Toán rời rạc"
              },
               {
                   "code": "MAA101",
                   "EngName": "Advanced Mathematics 2",
                   "VietName": "Toán cao cấp 2"
               },
               {
                   "code": "MAC102",
                   "EngName": "Advanced Mathematics For Business",
                   "VietName": "Toán doanh nghiệp"
               },
        ]
    };
}
else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}