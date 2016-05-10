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
                {
                    "code": "MAD111",
                    "EngName": "Discrete Mathematics 1",
                    "VietName": "Toán rời rạc 1"
                },
                 {
                     "code": "MAA101",
                     "EngName": "Discrete Mathematics 2",
                     "VietName": "Toán rời rạc 2"
                 },
                  {
                      "code": "MAC102",
                      "EngName": "Advanced Mathematics For Business",
                      "VietName": "Toán doanh nghiệp cao cấp"
                  },
                  {
                      "code": "MAS291",
                      "EngName": "Probability and Statistics",
                      "VietName": "Xác suất thống kê"
                  },
                   {
                       "code": "PRJ311",
                       "EngName": "Desktop Java Applications",
                       "VietName": "Java desktop"
                   },
                   {
                       "code": "PRJ321",
                       "EngName": "Web-based Java Applications",
                       "VietName": "Java web"
                   },
                    {
                        "code": "PRO192",
                        "EngName": "Object-Oriented Paradigm using Java",
                        "VietName": "Lập trình hướng đối tượng với Java"
                    },
                    {
                        "code": "Phạm Hương Giang",
                        "EngName": "ngáo ngáo",
                        "VietName": "Xử nữ"
                    },
        ]
    };
}
else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}