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
    childViews: 'dropdown'.w(),
	  
	  dropdown: SC.SelectView.design({
        layout: { top:100, left: 100, height: 25, width: 50 },

        // not sure whether these need to be SC.Objects or not. It seems to have no effect.
        items: [ SC.Object.create({ title: 'a', isEnabled: YES, checkbox: NO }),
          SC.Object.create({ title: 'b', isEnabled: YES, checkbox: NO })],

        /* what will be displayed in the menu. if left
         * out, the item object itself will be used.
         */
        itemTitleKey: 'title',
        theme: 'square',        // the defualt 'popup' theme doesn't work
        showCheckbox: NO
    })
  })

});
