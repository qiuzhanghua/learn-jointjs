import {dia, shapes} from '@joint/core';

const graph = new dia.Graph({}, { cellNamespace: shapes });

var paper = new dia.Paper({
    // el: document.getElementById('app'),
    model: graph,
    width: 600,
    height: 400,
    gridSize: 10,
    drawGrid: true,
    background: {
        color: 'rgba(0, 255, 0, 0.3)'
    },
    cellViewNamespace: shapes
});

var rect = new shapes.standard.Rectangle();
        rect.position(100, 30);
        rect.resize(100, 40);
        rect.attr({
            body: {
                fill: 'blue'
            },
            label: {
                text: 'Hello',
                fill: 'white'
            }
        });
        rect.addTo(graph);

        var rect2 = rect.clone();
        rect2.translate(300, 0);
        rect2.attr('label/text', 'World!');
        rect2.addTo(graph);

        var link = new shapes.standard.Link();
        link.source(rect);
        link.target(rect2);
        link.addTo(graph);

        paper.scale(0.5, 0.5);
        paper.translate(200, 100);

document.querySelector('#app')?.appendChild(paper.el)