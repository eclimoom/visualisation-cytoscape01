var _layout =  {
    name: 'breadthfirst' ,fit: false, padding: 5,directed:true,
    spacingFactor: 1,
    // circle: true,
    grid: true,

};

var cy = cytoscape({
    container: document.getElementById('cy'),
  
    boxSelectionEnabled: false,
    autounselectify: true,
    fit: true, // whether to fit to viewport
    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'content': 'data(name)',
          'text-valign': 'center',
          'color': 'white',
          'text-outline-width': 1,
          'text-outline-color': '#888',
          'background-color': '#888'
        })
      .selector(':selected')
        .css({
          'background-color': 'black',
          'line-color': 'black',
          'target-arrow-color': 'black',
          'source-arrow-color': 'black',
          'text-outline-color': 'black'
        }),
    elements: {
      nodes: [
        { data: 
            { id: 'desktop', name: 'Cytoscape', href: 'http://cytoscape.org' },
        position: {x: 500,y: 100} ,
        locked: true,
    },
        { data: { id: 'desktop2', name: 'Cytoscape2', href: 'http://cytoscape.org' },
        locked: false, position: {x: 500,y: 100},
        grabbable: true,  },
        
        { data: 
            { id: 'js', name: 'Cytoscape.js', href: 'http://js.cytoscape.org' },
            locked: true, 
            position: {x: 500,y: 200}
    
    }
      ],
      edges: [
        { data: { source: 'desktop', target: 'js' } }
      ]
    },
  
    layout: _layout
  });
  



  cy.on('tapdrag', 'node', function(){
    this.unlock();
  });



  cy.on('tapdragout', 'node', function(){
    this.lock();
  });


  var count = 10;
  $('#add').click(function(){
    count++;
    if(count<15){
        cy.add([{ group: 'nodes', data: { id: 'n1'+count , name: 'n1'+count}},
        { group: 'edges', data: { id: 'e0'+count, source: 'js', target: 'n1'+count } }]);
    }else if(count<20){
        cy.add([{ group: 'nodes', data: { id: 'n1'+count , name: 'n1'+count}},
        { group: 'edges', data: { id: 'n'+count, source: 'n111', target: 'n1'+count } }]);
    }else if(count<25){
        cy.add([{ group: 'nodes', data: { id: 'n1'+count , name: 'n1'+count}},
        { group: 'edges', data: { id: 'n'+count, source: 'n116', target: 'n1'+count } }]);
    }else{
        cy.add([{ group: 'nodes', data: { id: 'n1'+count , name: 'n1'+count}},
        { group: 'edges', data: { id: 'n'+count, source: 'n117', target: 'n1'+count } }]);
    }
    var layout = cy.layout(_layout);
    // grid circle concentric breadthfirst
    layout.run();

    
  });