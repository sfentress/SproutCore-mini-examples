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
			value: "Press the button to flip views. Tab on next view will not be selected as it should."
		}),
    
    appContainer: SC.ContainerView.design({
      isContainerView: YES,
      layout: { top: 50, left: 50},
      contentView: SC.ButtonView.design({
        layout: {left: 20, top: 20, width: 500, height: 24},
        title: "Click me",
        target: 'Example.mainController',
        action: 'switchViews'
    	}),
    	
    	alternateView: SC.View.create({
    	  
    	  childViews: 'tabs'.w(),
    	  
    	  tabs: SC.TabView.design({ 
          layout: { left: 0, top: 100, height: 200, width: 400 },
          items: [ 
            {title: "Page 1", value: "Example.mainPage.page1" },
            {title: "Page 2", value: "Example.mainPage.page2" }
          ], 
          itemTitleKey: 'title', 
          itemValueKey: 'value',
          nowShowing: 'Example.mainPage.page1' // defining the startup tab 
        
        })
      })
    })
  }),
  
  page1: SC.LabelView.design({
    layout: { left: 10, top: 50 },
    value:   'Page 1'
  }),
  
  page2: SC.LabelView.design({
    layout: { left: 300, top: 50 },
    value: 'Page 2'
  })

});
