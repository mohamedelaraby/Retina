$(document).ready(function (){
    // Setup navbar click button
    // if main section container has left padding class remove it else add it
    $(".navShowHide").on('click',

    /**
     *  Toggle Main Section Container status
     *  @return void
     */
    function (){
        /**
         *  @param  string main :- Hold main section container ID 
         *  @param  string nav :- Hold Side nav container ID 
         */
        let main = ("#mainSectionContainer");
        let nav = ("#sideNavContainer");

        // Toggle main section container Status
        if(main.hasClass("leftPadding")){
            // Hide Side navigation
            nav.hide();
        } else {
            // Show Side navigation
            nav.show();
        }

        main.toggleClass("leftPadding");
    });
});



    /**
     *  Toggle Main Section Container status
     *  @return void
     */
    function toggleMainSectionStatus(){
        /**
         *  @param  string main :- Hold main section container ID 
         *  @param  string nav :- Hold Side nav container ID 
         */
        let main = ("#mainSectionContainer");
        let nav = ("#sideNavContainer");

        // Toggle main section container Status
        if(main.hasClass("leftPadding")){
            // Hide Side navigation
            nav.hide();
        } else {
            // Show Side navigation
            nav.show();
        }

        main.toggleClass("leftPadding");
    }