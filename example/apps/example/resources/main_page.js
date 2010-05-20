// ==========================================================================
// Project:   Example - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Example */

// This page describes the main user interface for your application.  
Example.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'instructions appContainer'.w(),
    
    instructions: SC.LabelView.design(SC.StaticLayout, {
      layout: { top: 5, left: 5},
			useStaticLayout: YES,
			value: "Type a couple letters in the text field. Note the alerts. After two characters, view will switch to second text field. Alerts will no longer appear."
		}),
    
    appContainer: SC.ContainerView.design({
      isContainerView: YES,
      layout: { top: 50, left: 50},
      contentView: SC.TextFieldView.design({
        layout: {left: 20, top: 20, width: 500, height: 24},
        isTextArea: YES,
        valueBinding: 'Example.mainController.field1Value'
    	}),
    	alternateView: SC.TextFieldView.create({
    		layout: {right: 20, top: 20, width: 500, height: 24},
        isTextArea: YES,                                    // comment out this line to make it work
    		valueBinding: 'Example.mainController.field2Value'
    	})
    })
  })

});
