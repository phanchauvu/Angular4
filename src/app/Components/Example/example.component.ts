import { Component } from '@angular/core';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: [
        './example.component.css'
    ]
})

export class ExampleComponent {
    numValue: number = 0;

    Plus() {
        this.numValue = this.numValue + 1;
    }

    Sub() {
        this.numValue = this.numValue - 1;
    }

    hinh01: string = 'http://file.vforum.vn/hinh/2016/08/hinh-anh-dep-ve-cho-boo-cute-1.jpg';

    image: boolean = true;

    changeImg01(e) {
        e.srcElement.src = "http://1.bp.blogspot.com/-b0n6qjBYIuE/VM9NF7HxlTI/AAAAAAAAJDQ/MjFneY5uOP8/s1600/hinh-anh-nhung-chu-cho-de-thuong-4.jpg";
    }

    changeImg02(e) {
        e.srcElement.src = 'http://file.vforum.vn/hinh/2016/08/hinh-anh-dep-ve-cho-boo-cute-1.jpg';
    }
}