
        function calculer() {
            var d = Date.parse(document.getElementById("t1").value);
            var d_Birth = new Date(d);
            var d_now = new Date();
            var age = d_now.getFullYear() - d_Birth.getFullYear();
            var ageByMonthes = d_now.getMonth() - d_Birth.getMonth();
            document.getElementById("t2").value = age;
            document.getElementById("t3").value = age + " years old and " + ageByMonthes + " monthes ";
        }
