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
    childViews: 'appContainer'.w(),
    
    appContainer: SC.ContainerView.design({
      isContainerView: YES,
      layout: { top: 36, bottom: 32, left: 50, right: 0 },
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
