describe('app', function () {
    'use strict';

    var answer = window.app;

    it('should return false when function arguments types are wrong ', function(){
        expect(answer.calculateArea("Sukces",1,1,"Sukces","Sukces")).toEqual(false);
        expect(answer.calculateArea(1,"Sukces",1,"Sukces","Sukces")).toEqual(false);
        expect(answer.calculateArea(1,1,"Sukces","Sukces","Sukces")).toEqual(false);
        expect(answer.calculateArea(1,1,1,1,"Sukces")).toEqual(false);
        expect(answer.calculateArea(1,1,1,"Sukces",1)).toEqual(false);
    });
    it('should return Big null when area = 0', function(){
        expect(answer.calculateArea(0,0,0,"sukces","blad")).toEqual({ area : 0, message : 'Big null'});
        expect(answer.calculateArea(25,5,5,"sukces","blad")).toEqual({ area : 0, message : 'Big null'});
        expect(answer.calculateArea(5,25,5,"sukces","blad")).toEqual({ area : 0, message : 'Big null'});
    });
    it('should return area and passed succes String when area > 0', function () {
        expect(answer.calculateArea(10,2,1,"sukces","blad")).toEqual({ area : 8, message : 'sukces'});
        expect(answer.calculateArea(2,10,1,"sukces","blad")).toEqual({ area : 8, message : 'sukces'});
        expect(answer.calculateArea(11,5,2,"sukces","blad")).toEqual({ area : 1, message : 'sukces'});
        expect(answer.calculateArea(5,11,2,"sukces","blad")).toEqual({ area : 1, message : 'sukces'});
    });
    it('should return area and passed error String when area < 0', function(){
        expect(answer.calculateArea(10,2,10,"sukces","blad")).toEqual({ area : -10, message : 'blad'});
        expect(answer.calculateArea(2,10,10,"sukces","blad")).toEqual({ area : -10, message : 'blad'});
        expect(answer.calculateArea(10,5,20,"sukces","blad")).toEqual({ area : -90, message : 'blad'});
        expect(answer.calculateArea(5,10,20,"sukces","blad")).toEqual({ area : -90, message : 'blad'});

    });
});

