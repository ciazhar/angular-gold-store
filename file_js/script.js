var app = angular.module('sellapp',[]);

app.controller('sellController',function($scope,$http,$window){
    $scope.sellList = {};
    $scope.sellList = {
        "product": 
        [{
            "image": "100g.jpg",
            "name": "Emas 100g",
            "harga":"100000",
            "jumlah":"0"
        }, {
            "image": "50g.jpg",
            "name": "Emas 50g",
            "harga":"50000",
            "jumlah":"0"
        }, {
            "image": "25g.jpg",
            "name": "Emas 25g",
            "harga":"25000",
            "jumlah":"0"
        }, {
            "image": "10g.jpg",
            "name": "Emas 10g",
            "harga":"10000",
            "jumlah":"0"
        }, {
            "image": "5g.jpg",
            "name": "Emas 5g",
            "harga":"5000",
            "jumlah":"0"
        }, {
            "image": "4g.jpg",
            "name": "Emas 4g",
            "harga":"4000",
            "jumlah":"0"
        }, {
            "image": "3g.jpg",
            "name": "Emas 3g",
            "harga":"3000",
            "jumlah":"0"
        }, {
            "image": "2g.jpg",
            "name": "Emas 2g",
            "harga":"2000",
            "jumlah":"0"
        }, {
            "image": "1g.jpg",
            "name": "Emas 1g",
            "harga":"1000",
            "jumlah":"0"
        },
        
        ],
        "totalPrice":"0"
    };

    $scope.kurang = function(barang){
        var harga = parseInt(barang.harga)
        var hargaAwal = parseInt($scope.sellList.totalPrice)

        if(barang.jumlah==0){
            alert('Limit')
        }
        else{
            barang.jumlah--
            $scope.sellList.totalPrice = hargaAwal - harga
            console.log($scope.sellList.totalPrice)
        }
    }

    $scope.tambah = function(barang){
        var hargaAwal = parseInt($scope.sellList.totalPrice)
        var harga = parseInt(barang.harga)

        barang.jumlah++
        $scope.sellList.totalPrice = hargaAwal + harga
        console.log($scope.sellList.totalPrice)
    }

});

app.controller('buyController',function($scope,$http,$window){
    $scope.buyList = {};
    $scope.buyList = {
        "product": 
        [{
            "image": "1g.jpg",
            "name": "Emas 1g",
            "harga":"1000",
            "jumlah":"0"
        }, {
            "image": "2g.jpg",
            "name": "Emas 2g",
            "harga":"2000",
            "jumlah":"0"
        }, {
            "image": "3g.jpg",
            "name": "Emas 3g",
            "harga":"3000",
            "jumlah":"0"
        }, {
            "image": "4g.jpg",
            "name": "Emas 4g",
            "harga":"4000",
            "jumlah":"0"
        }, {
            "image": "5g.jpg",
            "name": "Emas 5g",
            "harga":"5000",
            "jumlah":"0"
        }, {
            "image": "10g.jpg",
            "name": "Emas 10g",
            "harga":"10000",
            "jumlah":"0"
        }, {
            "image": "25g.jpg",
            "name": "Emas 25g",
            "harga":"25000",
            "jumlah":"0"
        }, {
            "image": "50g.jpg",
            "name": "Emas 50g",
            "harga":"50000",
            "jumlah":"0"
        }, {
            "image": "100g.jpg",
            "name": "Emas 100g",
            "harga":"100000",
            "jumlah":"0"
        },
        
        ],
        "totalPrice":"0"
    };

    $scope.kurang = function(barang){
        var harga = parseInt(barang.harga)
        var hargaAwal = parseInt($scope.buyList.totalPrice)

        if(barang.jumlah==0){
            alert('Limit')
        }
        else{
            barang.jumlah--
            $scope.buyList.totalPrice = hargaAwal - harga
            console.log($scope.buyList.totalPrice)
        }
    }

    $scope.tambah = function(barang){
        var hargaAwal = parseInt($scope.buyList.totalPrice)
        var harga = parseInt(barang.harga)

        barang.jumlah++
        $scope.buyList.totalPrice = hargaAwal + harga
        console.log($scope.buyList.totalPrice)
    }

});