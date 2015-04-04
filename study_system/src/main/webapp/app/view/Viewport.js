/**
 * Created by LUYONG on 2015/1/8.
 */
Ext.define("StudyOnLine.view.Viewport",{
      extend:'Ext.container.Viewport',
      layout:'border',
      items:[
          {
              region:'north',
             html:'<h1 style="text-align: center">在线学习系统</h1>',
              height:80
          },
          {
              region:'west',
              width:200,
              //title:'菜单管理',
              split:true,
              //xtype:'menuview'
          }
          ,{
              region:'center',
              //title:'内容展示',
              xtype:'tabpanel',

              //id:'mainContent',
              items:[
                  {
                      title:'欢迎使用爬虫系统',
                      html:'<h1>欢迎使用爬虫系统</h1>'


                  }/*,
                  {
                       xtype:'CommodityTypeManageView',
                      closable:true
                  }*/

              ]

          }



      ]

});
