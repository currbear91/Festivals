myApp.controller('calendarController', ['$scope', '$location','$routeParams','$compile', 'uiCalendarConfig', 'eventFactory', 'userFactory', function($scope, $location, $routeParams, $compile, uiCalendarConfig, eventFactory, userFactory){

	var index = function(){
		eventFactory.index(function(returnedData){
			var eventArr = [];
			// console.log("*^*^*^*^*", returnedData);
			for(var i=0; i<returnedData.length; i++){
				var obj = {};
				obj.title = returnedData[i].title;
				obj.start = returnedData[i].start;
				obj.end = returnedData[i].end;
				obj.rendering = 'background';
				obj.allDay = true;
				eventArr.push(obj);
			}
			$('#calendar').fullCalendar('addEventSource', eventArr);
			console.log($scope.uiConfig.calendar);
		})
	}
	index();

	var userArtists = function(){
		userFactory.show(function(returnedData){
			var artistArr = [];
			console.log("*^*^*^*^*", returnedData);
			artists = returnedData.data._artists
			for(var i=0; i<artists.length; i++){
				var art = {};
				art.title = artists[i].name;
				art.start = artists[i].performanceDate;
				artistArr.push(art);
			}
			$('#calendar').fullCalendar('addEventSource', artistArr);
			console.log($scope.uiConfig.calendar);
		})
	}
	userArtists();

	// var show = function(){
	// 	event_id = $routeParams._id;
	// 	eventFactory.show(event_id, function(returnedData){
	// 		$scope.event = returnedData;
	// 		$scope.newEvent = returnedData;
	// 	})
	// }
	// show();

	// $scope.update = function(){
	// 	console.log($scope.newEvent);
	// 	$scope.newEvent._id = $routeParams._id;
	// 	eventFactory.update($scope.newEvent, function(url){
	// 		$location.url(url);
	// 	})
	// }
	// function CalendarCtrl($scope,$compile,uiCalendarConfig) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    $scope.changeTo = 'Hungarian';
    /* event source that pulls from google.com */
    $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };
    /* event source that contains custom events on the scope */
    $scope.events = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
    ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };

    $scope.calEventsExt = {
       color: '#f00',
       textColor: 'yellow',
       events: [ 
          {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        ]
    };
    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        alert(date.title + ' was clicked ');
    };
    /* alert on Drop */
     $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };
     /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) { 
        element.attr({'tooltip': event.title,
                     'tooltip-append-to-body': true});
        $compile(element)($scope);
    };
    // Alert Date on Click
    $scope.agendaDay = function(date, jsEvent, view) {
    	$('#calendar').fullCalendar('gotoDate', date);
        $('#calendar').fullCalendar('changeView', 'agendaDay');
    };
    /* config object */
    $scope.uiConfig = {
      	calendar:{
	        height: 800,
	        editable: true,
	        header:{
	          left: 'title',
	          center: 'month',
	          right: 'today prev,next'
        	},
        events: [
        	{
        		title: 'Bumbershoot',
        		textColor: 'blue',
        		allDay: true,
        		start: '2016-08-25T10:00:00',
        		end: '2016-08-28T22:00:00',
            	rendering: 'background'
        	}
        ],
        dayClick: $scope.agendaDay,
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };

    $scope.changeLang = function() {
      if($scope.changeTo === 'Hungarian'){
        $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
        $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
        $scope.changeTo= 'English';
      } else {
        $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        $scope.changeTo = 'Hungarian';
      }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
// }
}])