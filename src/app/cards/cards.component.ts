import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  comments!: any[];

  ngOnInit(): void {
    this.comments = [
      {
        photo: 'avatar-mark-webber.webp',
        name_person: 'Mark Webber',
        reaction: 'reacted to your recent post',
        person_comment: 'My first tournament today!',
        club: '',
        point: true,
        time_comment: '1m ago',
        real_comment: '',
      },
      {
        photo: 'avatar-angela-gray.webp',
        name_person: 'Angela Gray',
        reaction: 'followed you',
        person_comment: '',
        club: '',
        point: true,
        time_comment: '5m ago',
        real_comment: '',
      },
      {
        photo: 'avatar-jacob-thompson.webp',
        name_person: 'Jacob Thompson',
        reaction: 'has joined your group',
        person_comment: '',
        club: 'Chess Club',
        point: true,
        time_comment: '1 day ago',
        real_comment: '',
      },
      {
        photo: 'avatar-rizky-hasanuddin.webp',
        name_person: 'Rizky Hasanuddin',
        reaction: 'reacted to your recent post',
        person_comment: 'sent you a private message',
        club: '',
        point: false,
        time_comment: '5 days ago',
        real_comment:
          " Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      },
      {
        photo: 'avatar-kimberly-smith.webp',
        name_person: 'Kimberly Smith',
        reaction: 'commented on your picture',
        person_comment: 'picture',
        club: '',
        point: false,
        time_comment: '1 week ago',
        real_comment: '',
        message: false
      },
      {
        photo: 'avatar-nathan-peterson.webp',
        name_person: 'Nathan Peterson',
        reaction: 'reacted to your recent post',
        person_comment: '5 end-game strategies to increase your win rate',
        club: '',
        point: false,
        time_comment: '2 weeks ago',
        real_comment: '',
      },
      {
        photo: 'avatar-anna-kim.webp',
        name_person: 'Anna Kim',
        reaction: 'left the group',
        person_comment: '',
        club: 'Chess Club',
        point: false,
        time_comment: '2 weeks ago',
        real_comment: '',
      },
    ];
  }
}
