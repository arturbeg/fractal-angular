import { Injectable } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatGroup } from './../chatgroup-feature/chatgroup';
import { Profile } from '../profile-feature/profile'

@Injectable()
export class Topic {
	id: number;
	name: string;
	about: string;
	label: string;
	rating: number;
	chatgroup: ChatGroup;
	participants: Profile[];
	most_recent_message: string;


	constructor(
		id: number,
		name: string,
		about: string,
		label: string,
 		rating: number,
		chatgroup: ChatGroup,
		participants: Profile[],
		most_recent_message: string,

	) {
		this.id = id;
		this.name = name;
		this.about = about;
		this.label = label;
		this.rating = rating;
		this.chatgroup = chatgroup;
		this.participants = participants;
		this.most_recent_message = most_recent_message;
	}


  public upvote() {

		// this.chatService.upvoteTopic(this.label).subscribe(
    //   data => {
    //     console.log(data)
    //   }
		// )

		console.log("upvote")

	}

	



}





// export interface Topic {
// 	id: number;
// 	name: string;
// 	about: string;
// 	label: string;
// 	rating: number;
// 	chatgroup: ChatGroup;
// 	participants: Profile[];
// 	most_recent_message: string;
// 	// owner
// 	// chatgroup
// 	// description
// 	// avatar
// }