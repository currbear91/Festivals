angular.module('myApp').controller('ModalDemoCtrl', function ($scope, $uibModal, $routeParams, eventFactory, $log) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];
  $ctrl.showThis1 = false;
  $ctrl.showThis2 = false;
  $ctrl.showThis3 = false;
  $ctrl.showThis4 = false;
  $ctrl.animationsEnabled = true;
    var index = function(){
      eventFactory.index(function(returnedData){
        console.log("********************")
        $scope.events = returnedData
        })
      }
    index();

    var show = function(){
    event_id = $routeParams._id;
    eventFactory.show(event_id, function(returnedData){
      $scope.event = returnedData;
      })
    }
    console.log("********************")
    show();

  $ctrl.open = function (event) {
    // if(size == 1){
    //   $ctrl.showThis1 = true;
    //   $ctrl.showThis2 = false;
    //   $ctrl.showThis3 = false;
    //   $ctrl.showThis4 = false;
    // } else if(size == 2){
    //   $ctrl.showThis1 = false;
    //   $ctrl.showThis2 = true;
    //   $ctrl.showThis3 = false;
    //   $ctrl.showThis4 = false;
    // } else if(size == 3){
    //   $ctrl.showThis1 = false;
    //   $ctrl.showThis2 = false;
    //   $ctrl.showThis3 = true;
    //   $ctrl.showThis4 = false;
    // } else{
    //   $ctrl.showThis1 = false;
    //   $ctrl.showThis2 = false;
    //   $ctrl.showThis3 = false;
    //   $ctrl.showThis4 = true;
    // }


    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: './partials/eventModal.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      resolve: {
        items: function () {
          console.log('here');
          return $ctrl.items;
        }
      }
    });
    
    $ctrl.close = function () {
      modalInstance.close();
      console.log(modalInstance)
      console.log("Closing")
    };

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('myApp').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('myApp').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});
