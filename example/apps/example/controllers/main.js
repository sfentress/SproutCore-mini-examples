// ==========================================================================
// Project:   Example.mainController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Example */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Example.mainController = SC.ObjectController.create(
/** @scope Example.mainController.prototype */ {

  field1Value: null,
  
  field2Value: null,
  
  switchViews: function (){
		var containerView = Example.mainPage.get('mainPane').get('appContainer');
		
		var alternateView = containerView.get('alternateView');
		containerView.set( 'alternateView', containerView.get('contentView') );
		containerView.set('nowShowing', alternateView);
  },
  
  field1ValueUpdated: function (){
    alert("field1Value updated!");
    
    // switch after two letters
    var field1Value = this.get('field1Value');
    if (field1Value.length > 1){
      this.switchViews();
    }
  }.observes('field1Value'),
  
  field2ValueUpdated: function (){
    alert("field2Value updated!");
  }.observes('field2Value')

}) ;
