function convertNumToBurmeseWord() {
    let ones = [
        "သုည",
        "တစ်",
        "နှစ်",
        "သုံး",
        "လေး",
        "ငါး",
        "ခြောက်",
        "ခုနှစ်",
        "ရှစ်",
        "ကိုး",
    ];
    let tens = [
        "သုည",
        "တစ်ဆယ်",
        "နှစ်ဆယ်",
        "သုံးဆယ်",
        "လေးဆယ်",
        "ငါးဆယ်",
        "ခြောက်ဆယ်",
        "ခုနှစ်ဆယ်",
        "ရှစ်ဆယ်",
        "ကိုးဆယ်",
    ];
    let tens_with = [
        "သုည",
        "တစ်ဆယ့်",
        "နှစ်ဆယ့်",
        "သုံးဆယ့်",
        "လေးဆယ့်",
        "ငါးဆယ့်",
        "ခြောက်ဆယ့်",
        "ခုနှစ်ဆယ့်",
        "ရှစ်ဆယ့်",
        "ကိုးဆယ့်",
    ];
    let hundreds = ["ရာ", "ထောင်", "သောင်း", "သိန်း", "သန်း", "ကုဋေ"];
    let hundreds_with = ["ရာ့", "ထောင့်"];

    let i = document.getElementById("num").value;

    let rettxt = "";

    if (i < 10) {
        rettxt += ones[i];
    } else if (i < 100) {
        i = i.toString();
        if (i.substr(1, 2) != "0")
            rettxt += tens_with[i.substr(0, 1)] + ones[i.substr(1, 2)];
        else rettxt += tens[i.substr(0, 1)];
    } else if (i < 1000) {
        //123
        i = i.toString();
        if (i.substr(1, 1) == "0" && i.substr(2, 1) != "0")
            rettxt +=
                ones[i.substr(0, 1)] + hundreds_with[0] + ones[i.substr(2, 1)];
        else if (i.substr(1, 1) != "0" && i.substr(2, 1) != "0")
            rettxt +=
                ones[i.substr(0, 1)] +
                hundreds[0] +
                tens_with[i.substr(1, 1)] +
                ones[i.substr(2, 1)];
        else rettxt += ones[i.substr(0, 1)] + hundreds[0];
    } else if (i < 10000) {
        //1234
        i = i.toString();
        if (
            i.substr(1, 1) == "0" &&
            i.substr(2, 1) == "0" &&
            i.substr(3, 1) == "0"
        )
            rettxt += ones[i.substr(0, 1)] + hundreds[1];
        else if (
            i.substr(1, 1) == "0" &&
            i.substr(2, 1) != "0" &&
            i.substr(3, 1) != "0"
        )
            rettxt +=
                ones[i.substr(0, 1)] +
                hundreds_with[1] +
                tens_with[i.substr(2, 1)] +
                ones[i.substr(3, 1)];
        else if (
            i.substr(1, 1) == "0" &&
            i.substr(2, 1) == "0" &&
            i.substr(3, 1) != "0"
        )
            rettxt +=
                ones[i.substr(0, 1)] + hundreds_with[1] + ones[i.substr(3, 1)];
        else if (
            i.substr(1, 1) == "0" &&
            i.substr(2, 1) != "0" &&
            i.substr(3, 1) == "0"
        )
            rettxt +=
                ones[i.substr(0, 1)] + hundreds_with[1] + tens[i.substr(2, 1)];
        else if (
            i.substr(1, 1) != "0" &&
            i.substr(2, 1) == "0" &&
            i.substr(3, 1) != "0"
        )
            rettxt +=
                ones[i.substr(0, 1)] +
                hundreds_with[1] +
                ones[i.substr(1, 1)] +
                hundreds_with[0] +
                ones[i.substr(3, 1)];
        else if (
            i.substr(1, 1) != "0" &&
            i.substr(2, 1) != "0" &&
            i.substr(3, 1) == "0"
        )
            rettxt +=
                ones[i.substr(0, 1)] +
                hundreds_with[1] +
                ones[i.substr(1, 1)] +
                hundreds_with[0] +
                tens[i.substr(2, 1)];
        else if (
            i.substr(1, 1) != "0" &&
            i.substr(2, 1) == "0" &&
            i.substr(3, 1) == "0"
        )
            rettxt +=
                ones[i.substr(0, 1)] +
                hundreds_with[1] +
                ones[i.substr(1, 1)] +
                hundreds[0];
        else
            rettxt +=
                ones[i.substr(0, 1)] +
                hundreds_with[1] +
                ones[i.substr(1, 1)] +
                hundreds[0] +
                tens_with[i.substr(2, 1)] +
                ones[i.substr(3, 1)];
    } else if (i < 100000) {
        //သောင်း 10000
        i = i.toString();

        if (i.substr(1, 1) == "0") {
            rettxt += ones[i.substr(0, 1)];
            if (
                i.substr(2, 1) == "0" &&
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) == "0"
            )
                // 000
                rettxt += hundreds[2];
            else if (
                i.substr(2, 1) != "0" &&
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) != "0"
            )
                // 111
                rettxt +=
                    hundreds[2] +
                    ones[i.substr(2, 1)] +
                    hundreds[0] +
                    tens_with[i.substr(3, 1)] +
                    ones[i.substr(4, 1)];
            else if (
                i.substr(2, 1) != "0" &&
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) == "0"
            )
                // 110
                rettxt +=
                    hundreds[2] +
                    ones[i.substr(2, 1)] +
                    hundreds_with[0] +
                    tens[i.substr(3, 1)];
            else if (
                i.substr(2, 1) != "0" &&
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) == "0"
            )
                // 100
                rettxt += hundreds[2] + ones[i.substr(2, 1)] + hundreds[0];
            else if (
                i.substr(2, 1) != "0" &&
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) != "0"
            )
                // 101
                rettxt +=
                    hundreds[2] +
                    ones[i.substr(2, 1)] +
                    hundreds_with[0] +
                    ones[i.substr(4, 1)];
            else if (
                i.substr(2, 1) == "0" &&
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) != "0"
            )
                // 011
                rettxt +=
                    hundreds[2] + tens_with[i.substr(3, 1)] + ones[i.substr(4, 1)];
            else if (
                i.substr(2, 1) == "0" &&
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) != "0"
            )
                // 001
                rettxt += hundreds[2] + ones[i.substr(4, 1)];
            else if (
                i.substr(2, 1) == "0" &&
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) == "0"
            )
                // 010
                rettxt += hundreds[2] + tens[i.substr(3, 1)];
        } else {
            rettxt += ones[i.substr(0, 1)];
            if (
                i.substr(2, 1) == "0" &&
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) == "0"
            )
                // 000
                rettxt += hundreds[2] + ones[i.substr(1, 1)] + hundreds[1];
            else if (
                i.substr(2, 1) != "0" &&
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) != "0"
            )
                // 111
                rettxt +=
                    hundreds[2] +
                    ones[i.substr(1, 1)] +
                    hundreds_with[1] +
                    ones[i.substr(2, 1)] +
                    hundreds[0] +
                    tens_with[i.substr(3, 1)] +
                    ones[i.substr(4, 1)];
            else if (
                i.substr(2, 1) != "0" &&
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) == "0"
            )
                // 110
                rettxt +=
                    hundreds[2] +
                    ones[i.substr(1, 1)] +
                    hundreds[1] +
                    ones[i.substr(2, 1)] +
                    hundreds_with[0] +
                    tens[i.substr(3, 1)];
            else if (
                i.substr(2, 1) != "0" &&
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) == "0"
            )
                // 100
                rettxt +=
                    hundreds[2] +
                    ones[i.substr(1, 1)] +
                    hundreds_with[1] +
                    ones[i.substr(2, 1)] +
                    hundreds[0];
            else if (
                i.substr(2, 1) != "0" &&
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) != "0"
            )
                // 101
                rettxt +=
                    hundreds[2] +
                    ones[i.substr(1, 1)] +
                    hundreds_with[1] +
                    ones[i.substr(2, 1)] +
                    hundreds_with[0] +
                    ones[i.substr(4, 1)];
            else if (
                i.substr(2, 1) == "0" &&
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) != "0"
            )
                // 011
                rettxt +=
                    hundreds[2] +
                    ones[i.substr(1, 1)] +
                    hundreds[1] +
                    tens_with[i.substr(3, 1)] +
                    ones[i.substr(4, 1)];
            else if (
                i.substr(2, 1) == "0" &&
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) != "0"
            )
                // 001
                rettxt +=
                    hundreds[2] +
                    ones[i.substr(1, 1)] +
                    hundreds_with[1] +
                    ones[i.substr(4, 1)];
            else if (
                i.substr(2, 1) == "0" &&
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) == "0"
            )
                // 010
                rettxt +=
                    hundreds[2] +
                    ones[i.substr(1, 1)] +
                    hundreds_with[1] +
                    tens[i.substr(3, 1)];
        }
    } else if (i < 1000000) {
        //< 10 သိန်း
        i = i.toString();
        if (i.substr(1, 1) == "0") {
            if (i.substr(2, 1) == "0")
                rettxt += ones[i.substr(0, 1)] + hundreds[3];
            else if (i.substr(3, 1) == "0")
                rettxt +=
                    ones[i.substr(0, 1)] +
                    hundreds[3] +
                    ones[i.substr(2, 1)] +
                    hundreds[1];
            else
                rettxt +=
                    ones[i.substr(0, 1)] +
                    hundreds[3] +
                    ones[i.substr(2, 1)] +
                    hundreds_with[1];

            if (
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) != "0" &&
                i.substr(5, 1) != "0"
            )
                // 111
                rettxt +=
                    ones[i.substr(3, 1)] +
                    hundreds[0] +
                    tens_with[i.substr(4, 1)] +
                    ones[i.substr(5, 1)];
            else if (
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) != "0" &&
                i.substr(5, 1) == "0"
            )
                // 110
                rettxt +=
                    ones[i.substr(3, 1)] + hundreds_with[0] + tens[i.substr(4, 1)];
            else if (
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) == "0" &&
                i.substr(5, 1) == "0"
            )
                // 100
                rettxt += ones[i.substr(3, 1)] + hundreds[0];
            else if (
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) == "0" &&
                i.substr(5, 1) != "0"
            )
                // 101
                rettxt +=
                    ones[i.substr(3, 1)] + hundreds_with[0] + ones[i.substr(5, 1)];
            else if (
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) != "0" &&
                i.substr(5, 1) != "0"
            )
                // 011
                rettxt += tens_with[i.substr(4, 1)] + ones[i.substr(5, 1)];
            else if (
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) == "0" &&
                i.substr(5, 1) != "0"
            )
                // 001
                rettxt += ones[i.substr(5, 1)];
            else if (
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) != "0" &&
                i.substr(5, 1) == "0"
            )
                // 010
                rettxt += tens[i.substr(4, 1)];
        } else {
            if (i.substr(2, 1) == "0")
                rettxt +=
                    ones[i.substr(0, 1)] +
                    hundreds[3] +
                    ones[i.substr(1, 1)] +
                    hundreds[2];
            else if (i.substr(3, 1) == "0")
                rettxt +=
                    ones[i.substr(0, 1)] +
                    hundreds[3] +
                    ones[i.substr(1, 1)] +
                    hundreds[2] +
                    ones[i.substr(2, 1)] +
                    hundreds[1];
            else
                rettxt +=
                    ones[i.substr(0, 1)] +
                    hundreds[3] +
                    ones[i.substr(1, 1)] +
                    hundreds[2] +
                    ones[i.substr(2, 1)] +
                    hundreds_with[1];

            if (
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) != "0" &&
                i.substr(5, 1) != "0"
            )
                // 111
                rettxt +=
                    ones[i.substr(3, 1)] +
                    hundreds[0] +
                    tens_with[i.substr(4, 1)] +
                    ones[i.substr(5, 1)];
            else if (
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) != "0" &&
                i.substr(5, 1) == "0"
            )
                // 110
                rettxt +=
                    ones[i.substr(3, 1)] + hundreds_with[0] + tens[i.substr(4, 1)];
            else if (
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) == "0" &&
                i.substr(5, 1) == "0"
            )
                // 100
                rettxt += ones[i.substr(3, 1)] + hundreds[0];
            else if (
                i.substr(3, 1) != "0" &&
                i.substr(4, 1) == "0" &&
                i.substr(5, 1) != "0"
            )
                // 101
                rettxt +=
                    ones[i.substr(3, 1)] + hundreds_with[0] + ones[i.substr(5, 1)];
            else if (
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) != "0" &&
                i.substr(5, 1) != "0"
            )
                // 011
                rettxt += tens_with[i.substr(4, 1)] + ones[i.substr(5, 1)];
            else if (
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) == "0" &&
                i.substr(5, 1) != "0"
            )
                // 001
                rettxt += ones[i.substr(5, 1)];
            else if (
                i.substr(3, 1) == "0" &&
                i.substr(4, 1) != "0" &&
                i.substr(5, 1) == "0"
            )
                // 010
                rettxt += tens[i.substr(4, 1)];
        }
    } else if (i < 10000000) {
        //< သိန်း 100 10000
        i = i.toString();
        if (i.substr(1, 1) == "0") {
            rettxt += tens[i.substr(0, 1)] + hundreds[3];

            if (i.substr(2, 1) != 0)
                rettxt += ones[i.substr(2, 1)] + hundreds[2];
            if (i.substr(3, 1) != 0 && i.substr(4, 1) == 0)
                rettxt += ones[i.substr(3, 1)] + hundreds[1];
        /*add by ylh*/ else if (i.substr(3, 1) != 0 && i.substr(4, 1) != 0)
                rettxt += ones[i.substr(3, 1)] + hundreds_with[1];
            else rettxt += ""; //ones[i.substr(3,1)] + hundreds_with[1];
        } else {
            rettxt +=
                tens_with[i.substr(0, 1)] +
                ones[i.substr(1, 1)] +
                hundreds[3]; /*edit by ylh ones[i.substr(0,1)] to ones[i.substr(1,1)]*/
            if (i.substr(2, 1) != 0)
                rettxt += ones[i.substr(2, 1)] + hundreds[2];
            if (i.substr(3, 1) != 0 && i.substr(4, 1) == 0)
                rettxt += ones[i.substr(3, 1)] + hundreds[1];
        /*add by ylh*/ else if (i.substr(3, 1) != 0 && i.substr(4, 1) != 0)
                rettxt += ones[i.substr(3, 1)] + hundreds_with[1];
            else rettxt += ""; //ones[i.substr(3,1)] + hundreds_with[1];
        }
        if (
            i.substr(4, 1) != "0" &&
            i.substr(5, 1) != "0" &&
            i.substr(6, 1) != "0"
        )
            // 111
            rettxt +=
                ones[i.substr(4, 1)] +
                hundreds[0] +
                tens_with[i.substr(5, 1)] +
                ones[i.substr(6, 1)];
        else if (
            i.substr(4, 1) != "0" &&
            i.substr(5, 1) != "0" &&
            i.substr(6, 1) == "0"
        )
            // 110
            rettxt +=
                ones[i.substr(4, 1)] + hundreds_with[0] + tens[i.substr(5, 1)];
        else if (
            i.substr(4, 1) != "0" &&
            i.substr(5, 1) == "0" &&
            i.substr(6, 1) == "0"
        )
            // 100
            rettxt += ones[i.substr(4, 1)] + hundreds[0];
        else if (
            i.substr(4, 1) != "0" &&
            i.substr(5, 1) == "0" &&
            i.substr(6, 1) != "0"
        )
            // 101
            rettxt +=
                ones[i.substr(4, 1)] + hundreds_with[0] + ones[i.substr(6, 1)];
        else if (
            i.substr(4, 1) == "0" &&
            i.substr(5, 1) != "0" &&
            i.substr(6, 1) != "0"
        )
            // 011
            rettxt += tens_with[i.substr(5, 1)] + ones[i.substr(6, 1)];
        else if (
            i.substr(4, 1) == "0" &&
            i.substr(5, 1) == "0" &&
            i.substr(6, 1) != "0"
        )
            // 001
            rettxt += ones[i.substr(6, 1)];
        else if (
            i.substr(4, 1) == "0" &&
            i.substr(5, 1) != "0" &&
            i.substr(6, 1) == "0"
        )
            // 010
            rettxt += tens[i.substr(5, 1)];
        else rettxt += ""; /*add by ylh*/
    } else if (i < 100000000) {
        //< သိန်း 1000
        i = i.toString();
        if (i.substr(1, 1) == "0") {
            if (i.substr(2, 6) == "000000")
                rettxt += hundreds[3] + ones[i.substr(0, 1)] + hundreds[0];
            else
                rettxt += hundreds[3] + ones[i.substr(0, 1)] + hundreds_with[0];

            if (i.substr(2, 1) != 0)
                rettxt += ones[i.substr(2, 1)] + hundreds[3];
            if (i.substr(3, 1) != 0)
                rettxt += ones[i.substr(3, 1)] + hundreds[2];
            if (i.substr(4, 1) != 0 && i.substr(5, 1) == 0)
                rettxt += ones[i.substr(4, 1)] + hundreds[1];
            else if (i.substr(4, 1) != 0 && i.substr(5, 1) != 0)
                rettxt += ones[i.substr(4, 1)] + hundreds_with[1];

            if (
                i.substr(5, 1) != "0" &&
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) != "0"
            )
                // 111
                rettxt +=
                    ones[i.substr(5, 1)] +
                    hundreds[0] +
                    tens_with[i.substr(6, 1)] +
                    ones[i.substr(7, 1)];
            else if (
                i.substr(5, 1) != "0" &&
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) == "0"
            )
                // 110
                rettxt +=
                    ones[i.substr(5, 1)] + hundreds_with[0] + tens[i.substr(6, 1)];
            else if (
                i.substr(5, 1) != "0" &&
                i.substr(6, 1) == "0" &&
                i.substr(7, 1) == "0"
            )
                // 100
                rettxt += ones[i.substr(5, 1)] + hundreds[0];
            else if (
                i.substr(5, 1) != "0" &&
                i.substr(6, 1) == "0" &&
                i.substr(7, 1) != "0"
            )
                // 101
                rettxt +=
                    ones[i.substr(5, 1)] + hundreds_with[0] + ones[i.substr(7, 1)];
            else if (
                i.substr(5, 1) == "0" &&
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) != "0"
            )
                // 011
                rettxt += tens_with[i.substr(6, 1)] + ones[i.substr(7, 1)];
            else if (
                i.substr(5, 1) == "0" &&
                i.substr(6, 1) == "0" &&
                i.substr(7, 1) != "0"
            )
                // 001
                rettxt += ones[i.substr(7, 1)];
            else if (
                i.substr(5, 1) == "0" &&
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) == "0"
            )
                // 010
                rettxt += tens[i.substr(6, 1)];
        } else {
            rettxt += hundreds[3] + ones[i.substr(0, 1)] + hundreds_with[0];
            if (i.substr(2, 1) == 0) rettxt += tens[i.substr(1, 1)];
            else rettxt += tens_with[i.substr(1, 1)];
            if (i.substr(2, 1) != 0)
                rettxt += ones[i.substr(2, 1)] + hundreds[3];
            if (i.substr(3, 1) != 0)
                rettxt += ones[i.substr(3, 1)] + hundreds[2];
            if (i.substr(4, 1) != 0 && i.substr(5, 1) == 0)
                rettxt += ones[i.substr(4, 1)] + hundreds[1];
            else if (i.substr(4, 1) != 0 && i.substr(5, 1) != 0)
                rettxt += ones[i.substr(4, 1)] + hundreds_with[1];

            if (
                i.substr(5, 1) != "0" &&
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) != "0"
            )
                // 111
                rettxt +=
                    ones[i.substr(5, 1)] +
                    hundreds[0] +
                    tens_with[i.substr(6, 1)] +
                    ones[i.substr(7, 1)];
            else if (
                i.substr(5, 1) != "0" &&
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) == "0"
            )
                // 110
                rettxt +=
                    ones[i.substr(5, 1)] + hundreds_with[0] + tens[i.substr(6, 1)];
            else if (
                i.substr(5, 1) != "0" &&
                i.substr(6, 1) == "0" &&
                i.substr(7, 1) == "0"
            )
                // 100
                rettxt += ones[i.substr(5, 1)] + hundreds[0];
            else if (
                i.substr(5, 1) != "0" &&
                i.substr(6, 1) == "0" &&
                i.substr(7, 1) != "0"
            )
                // 101
                rettxt +=
                    ones[i.substr(5, 1)] + hundreds_with[0] + ones[i.substr(7, 1)];
            else if (
                i.substr(5, 1) == "0" &&
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) != "0"
            )
                // 011
                rettxt += tens_with[i.substr(6, 1)] + ones[i.substr(7, 1)];
            else if (
                i.substr(5, 1) == "0" &&
                i.substr(6, 1) == "0" &&
                i.substr(7, 1) != "0"
            )
                // 001
                rettxt += ones[i.substr(7, 1)];
            else if (
                i.substr(5, 1) == "0" &&
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) == "0"
            )
                // 010
                rettxt += tens[i.substr(6, 1)];
        }
    } else if (i < 1000000000) {
        //< သိန်း 10000
        i = i.toString();
        if (i.substr(1, 1) == "0") {
            if (i.substr(2, 7) == "0000000")
                rettxt += hundreds[3] + ones[i.substr(0, 1)] + hundreds[1];
            else
                rettxt += hundreds[3] + ones[i.substr(0, 1)] + hundreds_with[1];

            if (i.substr(2, 1) != 0 && i.substr(3, 1) == 0)
                rettxt += tens[i.substr(2, 1)] + hundreds[3];
            else if (i.substr(2, 1) != 0 && i.substr(3, 1) != 0)
                rettxt += tens_with[i.substr(2, 1)];
            if (i.substr(3, 1) != 0)
                rettxt += ones[i.substr(3, 1)] + hundreds[3];
            if (i.substr(4, 1) != 0)
                rettxt += ones[i.substr(4, 1)] + hundreds[2];
            if (i.substr(5, 1) != 0 && i.substr(6, 1) == 0)
                rettxt += ones[i.substr(5, 1)] + hundreds[1];
            else if (i.substr(5, 1) != 0 && i.substr(6, 1) != 0)
                rettxt += ones[i.substr(5, 1)] + hundreds_with[1];

            if (
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) != "0"
            )
                // 111
                rettxt +=
                    ones[i.substr(6, 1)] +
                    hundreds[0] +
                    tens_with[i.substr(7, 1)] +
                    ones[i.substr(8, 1)];
            else if (
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) == "0"
            )
                // 110
                rettxt +=
                    ones[i.substr(6, 1)] + hundreds_with[0] + tens[i.substr(7, 1)];
            else if (
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) == "0" &&
                i.substr(8, 1) == "0"
            )
                // 100
                rettxt += ones[i.substr(6, 1)] + hundreds[0];
            else if (
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) == "0" &&
                i.substr(8, 1) != "0"
            )
                // 101
                rettxt +=
                    ones[i.substr(6, 1)] + hundreds_with[0] + ones[i.substr(8, 1)];
            else if (
                i.substr(5, 1) == "0" &&
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) != "0"
            )
                // 011
                rettxt += tens_with[i.substr(7, 1)] + ones[i.substr(8, 1)];
            else if (
                i.substr(6, 1) == "0" &&
                i.substr(7, 1) == "0" &&
                i.substr(8, 1) != "0"
            )
                // 001
                rettxt += ones[i.substr(8, 1)];
            else if (
                i.substr(5, 1) == "0" &&
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) == "0"
            )
                // 010
                rettxt += tens[i.substr(7, 1)];
        } else {
            rettxt += hundreds[3] + ones[i.substr(0, 1)] + hundreds_with[1];

            if (i.substr(1, 1) != 0)
                rettxt += ones[i.substr(1, 1)] + hundreds[0];

            if (i.substr(2, 1) != 0 && i.substr(3, 1) == 0)
                rettxt += tens[i.substr(2, 1)] + hundreds[3];
            else if (i.substr(2, 1) != 0 && i.substr(3, 1) != 0)
                rettxt += tens_with[i.substr(2, 1)];
            if (i.substr(3, 1) != 0)
                rettxt += ones[i.substr(3, 1)] + hundreds[3];
            if (i.substr(4, 1) != 0)
                rettxt += ones[i.substr(4, 1)] + hundreds[2];
            if (i.substr(5, 1) != 0 && i.substr(6, 1) == 0)
                rettxt += ones[i.substr(5, 1)] + hundreds[1];
            else if (i.substr(5, 1) != 0 && i.substr(6, 1) != 0)
                rettxt += ones[i.substr(5, 1)] + hundreds_with[1];

            if (
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) != "0"
            )
                // 111
                rettxt +=
                    ones[i.substr(6, 1)] +
                    hundreds[0] +
                    tens_with[i.substr(7, 1)] +
                    ones[i.substr(8, 1)];
            else if (
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) == "0"
            )
                // 110
                rettxt +=
                    ones[i.substr(6, 1)] + hundreds_with[0] + tens[i.substr(7, 1)];
            else if (
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) == "0" &&
                i.substr(8, 1) == "0"
            )
                // 100
                rettxt += ones[i.substr(6, 1)] + hundreds[0];
            else if (
                i.substr(6, 1) != "0" &&
                i.substr(7, 1) == "0" &&
                i.substr(8, 1) != "0"
            )
                // 101
                rettxt +=
                    ones[i.substr(6, 1)] + hundreds_with[0] + ones[i.substr(8, 1)];
            else if (
                i.substr(5, 1) == "0" &&
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) != "0"
            )
                // 011
                rettxt += tens_with[i.substr(7, 1)] + ones[i.substr(8, 1)];
            else if (
                i.substr(6, 1) == "0" &&
                i.substr(7, 1) == "0" &&
                i.substr(8, 1) != "0"
            )
                // 001
                rettxt += ones[i.substr(8, 1)];
            else if (
                i.substr(5, 1) == "0" &&
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) == "0"
            )
                // 010
                rettxt += tens[i.substr(7, 1)];
        }
    } else if (i < 10000000000) {
        //< သိန်း 100000
        i = i.toString();
        if (i.substr(1, 1) == "0") {
            // if (i.substr(2, 8) == "00000000")
            rettxt += hundreds[3] + ones[i.substr(0, 1)] + hundreds[2];
            /* else
              rettxt += hundreds[3] + ones[i.substr(0, 1)] + hundreds_with[2]; */

            if (
                i.substr(2, 1) != 0 &&
                ((i.substr(3, 1) == 0 && i.substr(4, 1) == 0) ||
                    (i.substr(3, 1) != 0 && i.substr(4, 1) != 0))
            )
                rettxt += ones[i.substr(2, 1)] + hundreds[0];
            else if (
                i.substr(2, 1) != 0 &&
                (i.substr(3, 1) != 0 ||
                    (i.substr(3, 1) == 0 && i.substr(4, 1) != 0))
            )
                rettxt += ones[i.substr(2, 1)] + hundreds_with[0];
            if (i.substr(3, 1) != 0 && i.substr(4, 1) == 0)
                rettxt += tens[i.substr(3, 1)] + hundreds[3];
            else if (i.substr(3, 1) != 0 && i.substr(4, 1) != 0)
                rettxt += tens_with[i.substr(3, 1)];
            if (i.substr(4, 1) != 0)
                rettxt += ones[i.substr(4, 1)] + hundreds[3];
            if (i.substr(5, 1) != 0)
                rettxt += ones[i.substr(5, 1)] + hundreds[2];
            if (i.substr(6, 1) != 0 && i.substr(7, 1) == 0)
                rettxt += ones[i.substr(6, 1)] + hundreds[1];
            else if (i.substr(6, 1) != 0 && i.substr(7, 1) != 0)
                rettxt += ones[i.substr(6, 1)] + hundreds_with[1];

            if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) != "0"
            )
                // 111
                rettxt +=
                    ones[i.substr(7, 1)] +
                    hundreds[0] +
                    tens_with[i.substr(8, 1)] +
                    ones[i.substr(9, 1)];
            else if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) == "0"
            )
                // 110
                rettxt +=
                    ones[i.substr(7, 1)] + hundreds_with[0] + tens[i.substr(8, 1)];
            else if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) == "0" &&
                i.substr(9, 1) == "0"
            )
                // 100
                rettxt += ones[i.substr(7, 1)] + hundreds[0];
            else if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) == "0" &&
                i.substr(9, 1) != "0"
            )
                // 101
                rettxt +=
                    ones[i.substr(7, 1)] + hundreds_with[0] + ones[i.substr(9, 1)];
            else if (
                i.substr(6, 1) == "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) != "0"
            )
                // 011
                rettxt += tens_with[i.substr(8, 1)] + ones[i.substr(9, 1)];
            else if (
                i.substr(7, 1) == "0" &&
                i.substr(8, 1) == "0" &&
                i.substr(9, 1) != "0"
            )
                // 001
                rettxt += ones[i.substr(9, 1)];
            else if (
                i.substr(6, 1) == "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) == "0"
            )
                // 010
                rettxt += tens[i.substr(8, 1)];
        } else {
            rettxt += hundreds[3] + ones[i.substr(0, 1)] + hundreds[2];
            if (i.substr(1, 1) != 0 && i.substr(2, 1) == 0)
                rettxt += ones[i.substr(1, 1)] + hundreds[1];
            else if (i.substr(1, 1) != 0 && i.substr(2, 1) != 0)
                rettxt += ones[i.substr(1, 1)] + hundreds_with[1];

            if (
                i.substr(2, 1) != 0 &&
                ((i.substr(3, 1) == 0 && i.substr(4, 1) == 0) ||
                    (i.substr(3, 1) != 0 && i.substr(4, 1) != 0))
            )
                rettxt += ones[i.substr(2, 1)] + hundreds[0];
            else if (
                i.substr(2, 1) != 0 &&
                (i.substr(3, 1) != 0 ||
                    (i.substr(3, 1) == 0 && i.substr(4, 1) != 0))
            )
                rettxt += ones[i.substr(2, 1)] + hundreds_with[0];
            if (i.substr(3, 1) != 0 && i.substr(4, 1) == 0)
                rettxt += tens[i.substr(3, 1)] + hundreds[3];
            else if (i.substr(3, 1) != 0 && i.substr(4, 1) != 0)
                rettxt += tens_with[i.substr(3, 1)];
            if (i.substr(4, 1) != 0)
                rettxt += ones[i.substr(4, 1)] + hundreds[3];
            if (i.substr(5, 1) != 0)
                rettxt += ones[i.substr(5, 1)] + hundreds[2];
            if (i.substr(6, 1) != 0 && i.substr(7, 1) == 0)
                rettxt += ones[i.substr(6, 1)] + hundreds[1];
            else if (i.substr(6, 1) != 0 && i.substr(7, 1) != 0)
                rettxt += ones[i.substr(6, 1)] + hundreds_with[1];

            if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) != "0"
            )
                // 111
                rettxt +=
                    ones[i.substr(7, 1)] +
                    hundreds[0] +
                    tens_with[i.substr(8, 1)] +
                    ones[i.substr(9, 1)];
            else if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) == "0"
            )
                // 110
                rettxt +=
                    ones[i.substr(7, 1)] + hundreds_with[0] + tens[i.substr(8, 1)];
            else if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) == "0" &&
                i.substr(9, 1) == "0"
            )
                // 100
                rettxt += ones[i.substr(7, 1)] + hundreds[0];
            else if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) == "0" &&
                i.substr(9, 1) != "0"
            )
                // 101
                rettxt +=
                    ones[i.substr(7, 1)] + hundreds_with[0] + ones[i.substr(9, 1)];
            else if (
                i.substr(6, 1) == "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) != "0"
            )
                // 011
                rettxt += tens_with[i.substr(8, 1)] + ones[i.substr(9, 1)];
            else if (
                i.substr(7, 1) == "0" &&
                i.substr(8, 1) == "0" &&
                i.substr(9, 1) != "0"
            )
                // 001
                rettxt += ones[i.substr(9, 1)];
            else if (
                i.substr(6, 1) == "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) == "0"
            )
                // 010
                rettxt += tens[i.substr(8, 1)];
        }
    } else if (i < 100000000000) {
        //< သိန်း 1000000
        i = i.toString();
        if (i.substr(1, 1) == "0") {
            rettxt += hundreds[3] + ones[i.substr(0, 1)] + hundreds[3];

            if (
                i.substr(2, 1) != 0 &&
                ((i.substr(3, 1) == 0 && i.substr(4, 1) == 0) ||
                    (i.substr(3, 1) != 0 && i.substr(4, 1) != 0))
            )
                rettxt += ones[i.substr(2, 1)] + hundreds[0];
            else if (
                i.substr(2, 1) != 0 &&
                (i.substr(3, 1) != 0 ||
                    (i.substr(3, 1) == 0 && i.substr(4, 1) != 0))
            )
                rettxt += ones[i.substr(2, 1)] + hundreds_with[0];
            if (i.substr(3, 1) != 0 && i.substr(4, 1) == 0)
                rettxt += tens[i.substr(3, 1)] + hundreds[3];
            else if (i.substr(3, 1) != 0 && i.substr(4, 1) != 0)
                rettxt += tens_with[i.substr(3, 1)];
            if (i.substr(4, 1) != 0)
                rettxt += ones[i.substr(4, 1)] + hundreds[3];
            if (i.substr(5, 1) != 0)
                rettxt += ones[i.substr(5, 1)] + hundreds[2];
            if (i.substr(6, 1) != 0 && i.substr(7, 1) == 0)
                rettxt += ones[i.substr(6, 1)] + hundreds[1];
            else if (i.substr(6, 1) != 0 && i.substr(7, 1) != 0)
                rettxt += ones[i.substr(6, 1)] + hundreds_with[1];

            if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) != "0"
            )
                // 111
                rettxt +=
                    ones[i.substr(7, 1)] +
                    hundreds[0] +
                    tens_with[i.substr(8, 1)] +
                    ones[i.substr(9, 1)];
            else if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) == "0"
            )
                // 110
                rettxt +=
                    ones[i.substr(7, 1)] + hundreds_with[0] + tens[i.substr(8, 1)];
            else if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) == "0" &&
                i.substr(9, 1) == "0"
            )
                // 100
                rettxt += ones[i.substr(7, 1)] + hundreds[0];
            else if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) == "0" &&
                i.substr(9, 1) != "0"
            )
                // 101
                rettxt +=
                    ones[i.substr(7, 1)] + hundreds_with[0] + ones[i.substr(9, 1)];
            else if (
                i.substr(6, 1) == "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) != "0"
            )
                // 011
                rettxt += tens_with[i.substr(8, 1)] + ones[i.substr(9, 1)];
            else if (
                i.substr(7, 1) == "0" &&
                i.substr(8, 1) == "0" &&
                i.substr(9, 1) != "0"
            )
                // 001
                rettxt += ones[i.substr(9, 1)];
            else if (
                i.substr(6, 1) == "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) == "0"
            )
                // 010
                rettxt += tens[i.substr(8, 1)];
        } else {
            rettxt += hundreds[3] + ones[i.substr(0, 1)] + hundreds[2];
            if (i.substr(1, 1) != 0 && i.substr(2, 1) == 0)
                rettxt += ones[i.substr(1, 1)] + hundreds[1];
            else if (i.substr(1, 1) != 0 && i.substr(2, 1) != 0)
                rettxt += ones[i.substr(1, 1)] + hundreds_with[1];

            if (
                i.substr(2, 1) != 0 &&
                ((i.substr(3, 1) == 0 && i.substr(4, 1) == 0) ||
                    (i.substr(3, 1) != 0 && i.substr(4, 1) != 0))
            )
                rettxt += ones[i.substr(2, 1)] + hundreds[0];
            else if (
                i.substr(2, 1) != 0 &&
                (i.substr(3, 1) != 0 ||
                    (i.substr(3, 1) == 0 && i.substr(4, 1) != 0))
            )
                rettxt += ones[i.substr(2, 1)] + hundreds_with[0];
            if (i.substr(3, 1) != 0 && i.substr(4, 1) == 0)
                rettxt += tens[i.substr(3, 1)] + hundreds[3];
            else if (i.substr(3, 1) != 0 && i.substr(4, 1) != 0)
                rettxt += tens_with[i.substr(3, 1)];
            if (i.substr(4, 1) != 0)
                rettxt += ones[i.substr(4, 1)] + hundreds[3];
            if (i.substr(5, 1) != 0)
                rettxt += ones[i.substr(5, 1)] + hundreds[2];
            if (i.substr(6, 1) != 0 && i.substr(7, 1) == 0)
                rettxt += ones[i.substr(6, 1)] + hundreds[1];
            else if (i.substr(6, 1) != 0 && i.substr(7, 1) != 0)
                rettxt += ones[i.substr(6, 1)] + hundreds_with[1];

            if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) != "0"
            )
                // 111
                rettxt +=
                    ones[i.substr(7, 1)] +
                    hundreds[0] +
                    tens_with[i.substr(8, 1)] +
                    ones[i.substr(9, 1)];
            else if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) == "0"
            )
                // 110
                rettxt +=
                    ones[i.substr(7, 1)] + hundreds_with[0] + tens[i.substr(8, 1)];
            else if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) == "0" &&
                i.substr(9, 1) == "0"
            )
                // 100
                rettxt += ones[i.substr(7, 1)] + hundreds[0];
            else if (
                i.substr(7, 1) != "0" &&
                i.substr(8, 1) == "0" &&
                i.substr(9, 1) != "0"
            )
                // 101
                rettxt +=
                    ones[i.substr(7, 1)] + hundreds_with[0] + ones[i.substr(9, 1)];
            else if (
                i.substr(6, 1) == "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) != "0"
            )
                // 011
                rettxt += tens_with[i.substr(8, 1)] + ones[i.substr(9, 1)];
            else if (
                i.substr(7, 1) == "0" &&
                i.substr(8, 1) == "0" &&
                i.substr(9, 1) != "0"
            )
                // 001
                rettxt += ones[i.substr(9, 1)];
            else if (
                i.substr(6, 1) == "0" &&
                i.substr(8, 1) != "0" &&
                i.substr(9, 1) == "0"
            )
                // 010
                rettxt += tens[i.substr(8, 1)];
        }
    }

    document.getElementById("txtBox").innerHTML = rettxt;
}