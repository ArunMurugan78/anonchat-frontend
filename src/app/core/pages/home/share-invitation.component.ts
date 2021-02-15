import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../user/user.service';
import urlJoin from 'url-join';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-share-invitation',
  templateUrl: './share-invitation.component.html',
  styleUrls: ['../../../../styles/palette.scss']
})
export class ShareInvitationComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  @Input('isInvitationShareModalOpen') isInvitationShareModalOpen: undefined | BehaviorSubject<boolean>;

  @ViewChild('infoText') infoTextEl: ElementRef | undefined;

  get invitationLink(): string {
    return urlJoin(window.location.href, `/accept-invitation/${this.userService.user?.invitationId}`);
  }

  ngOnInit(): void {
    if ('share' in navigator) {
      void navigator.share({
        title: 'Invitation Link',
        text: 'Share this invitation link',
        url: this.invitationLink
      });
    }
  }

  copyLink(): void {
    void navigator.clipboard.writeText(this.invitationLink);
    if (typeof this.infoTextEl !== 'undefined') {
      this.infoTextEl.nativeElement.innerText = 'Link Copied to Clipboard!';
    }
  }
}
