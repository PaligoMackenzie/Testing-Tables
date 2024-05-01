store['en'] = {};


        $(document).ready(function () {
        
            
            indexDict['en']  = lunr(function () {

            

                this.field('title', {boost: 10});
                this.field('body');
                this.ref('id');
            

        
this.add({id:1, 
title:"Test", 
body:" test ▲this test topic.▼ test ▼ guilabel test ▲ guiicon " });
                
                store['en'][1]= {
                'title': "Test",
                'href': '32142-32150-test.html'
                
                    , 'breadcrumbs': "Apple \/ Test"
                        , 'snippet': "▲This is a test topic.▼ test ▼ guilabel test ▲ guiicon..."
                };
                
                


            });

            $(document).trigger('search.ready');
       }); 

        