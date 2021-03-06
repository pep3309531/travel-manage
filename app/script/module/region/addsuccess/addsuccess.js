'use strict';

var $ = require('$'),
    template = require('template'),
    CustomSideBarView = require('CustomSideBarView');

var RegionAddSuccessPageView = CustomSideBarView.extend({

    render: function () {
        var sidebar = $('#side-nav').length?undefined:template('sidebar',{active:'region'});
        this.renderContent({
            sidebar:sidebar,
            container:template('region/addsuccess',{action:'更新'})
        });
    },

    events:{
        'click':{
            'continue':function(){

            },
            'returnToList':function(){

            }
        }
    }
});
    
module.exports = RegionAddSuccessPageView;