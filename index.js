/*
 *  @Soldy\consoletablerc\2021.02.07\GPL3
 */
'use strict';

/*
 * @prototype
 */
const tablercBase = function(){
    this.render = function(data){
        return render(data);
    };
    const elements = {
        top :{
            start   : '\u250C',
            middle  : '\u252c',
            line    : '\u2500',
            end     : '\u2510'
        },
        center :{
            start  : '\u251c',
            middle : '\u253c',
            line   : '\u2500',
            end    : '\u2524'
        },
        button :{
            start  : '\u2514',
            middle : '\u2534',
            line   : '\u2500',
            end    : '\u2518'
        },
        separator:  '\u2502'
    };
    const calcSize = function(data){
        let columns = {};
        let out = [];
        for (let i of data)
             for(let c in i)
                 if(typeof columns[c] === 'undefined'){
                     columns[c] = i[c].length;
                 }else if(i[c].length > columns[c]){
                     columns[c] = i[c].length;
                 }
        for (let i in columns)
            out.push({
                name : i,
                size : columns[i],
            });
        return out;
    }
    const renderBorder = function(size, elem){
        let out = elem.start + ('').padEnd(size[0].size, elem.line);
        for (let i = 1 ; size.length > i ; i++ ) {
            out += elem.middle + (('').padEnd(size[i].size, elem.line));
        }
        out += elem.end;
        return out;
    }
    const renderLine = function(columns, e){
        let out = elements.separator;
        for (let i in columns) {
            out += (columns[i].padEnd(e[i].size, ' '));
            out += elements.separator;
        }
        return out;

    }
    const render = function(data){
        let out = [];
        const size = calcSize(data); 
        let line = 0;
        out.push(
            renderBorder(size, elements.top)
        );
        for(let i of data){
            if(line > 0)
                out.push(
                    renderBorder(size, elements.center)
                );
            out.push(
                    renderLine(i, size)
            );
            line++;
        }
        out.push(
            renderBorder(size, elements.button)
        );
        return out;
    }

}

exports.base = tablercBase;
