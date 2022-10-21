// importing the packages that have been downloaded

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";



import jsBadgeImage from "./assets/images/js-badge.svg";










$(document).ready(function () {
    let myJsBadgeImgStorer = $(".head-img");

    // setting the image attribute for the link tag stored above

    console.log(myJsBadgeImgStorer);
    myJsBadgeImgStorer.attr("href", jsBadgeImage);




    $("#calendar-form").submit(function (event) {

    // picking the place I want to show image in html 



        // this is the variable 
        let realWeekDay;

        event.preventDefault();
        $(".output").fadeIn("slow");

        // gettingt the date value user inputs into application
        let usersDate = $("#user-date").val();

        console.log(usersDate);
        
        // a phase in my application has been passed, now its time to determine which day is monday, tuesday, wednesday

        // storing all of our weekdays

        // const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        // const normalDate = time.getDay();
        // console.log(normalDate);

        let finalDate = new Date(usersDate).toDateString();

        console.log(finalDate);

        let finDateArray = finalDate.split(" ");

        console.log(finDateArray);

        // storing the first index character in the finDateArray

        let myShowingDate = finDateArray[0];

        console.log(myShowingDate);

        weekDayChecker();

        function weekDayChecker(){
            

            if(myShowingDate == "Mon"){
                return realWeekDay = "Monday";
                console.log(realWeekDay);
            }
            else if(myShowingDate == "Tue"){
                return realWeekDay = "Tuesday";
            }
            else if(myShowingDate == "Wed"){
                return realWeekDay = "Wednesday";
            }
            else if(myShowingDate == "Thu"){
                return realWeekDay = "Thursday";
            }
            else if(myShowingDate == "Fri"){
                return realWeekDay = "Friday";
            }
    
            else if(myShowingDate == "Sat"){
                return realWeekDay = "Saturday";
            }
            else if(myShowingDate == "Sun"){
                return realWeekDay = "Sunday";
            }
        }




        console.log(realWeekDay);


        // now showing the value to the user 

        $(".show-weekday").html(realWeekDay);
        

    });
});