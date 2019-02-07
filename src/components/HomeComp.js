import React, { Component } from 'react';
import '../styles/home.scss';

class HomeComp extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div className="homecomp">
                <section>
                <h2>
                This is Home Component
                </h2>
                </section>
                <section>
                <h2>
                1. User friendly language
                It is also important to consider menu navigation language and labelling. With so much competition on the web, it's no surprise that we try to get creative with our copywriting but sometimes this is at the expense of clarity. Your site may be industry-specific however, it's important not to forget about the user and how they would interpret or understand what you do. For instance if you were to label a shop area 'Marketplace' this is not a term that users are familiar with and hence it leaves an opening for interpretation. Any link that takes more than a second to figure out or language that forces the user to click in order to discover what's available compromises user experience. If you're keen to see which wording will perform better for your primary navigation you can put some A/B testing into place. More often than not, it's best to keep your primary navigation simple and easy to understand and if you're wanting to add personalisation then why not try this with pop-ups and notifications? The example below from Spread Shirt exemplifies clever copywriting to encourage users to provide feedback.
                </h2>
                </section>
                <section>
                <h2>
                2. Don't re-invent the wheel (use web conventions)
The reason why conventions exist is because they are based off ideas that work. Once an idea is known to work this usually results in such a large following that it then becomes a common language. Design conventions work so well that you can look at a website in a completely different language and still partially navigate your way around. The only time you should ever break from conventions is if you have a better way of doing something, for example if you have a campaign site, it might be more appropriate to do something non-conventional with the menu. Take a look at this example below and click on the menu icon. This works because it encourages users to play and interact with the campaign.
                </h2>
                </section>
                <section>
                <h2>
                3. User Friendly pages
The reason why conventions exist is because they are based off ideas that work. Once an idea is known to work this usually results in such a large following that it then becomes a common language. Design conventions work so well that you can look at a website in a completely different language and still partially navigate your way around. The only time you should ever break from conventions is if you have a better way of doing something, for example if you have a campaign site, it might be more appropriate to do something non-conventional with the menu. Take a look at this example below and click on the menu icon. This works because it encourages users to play and interact with the campaign.
                </h2>
                </section>
            </div>
        )
    }
}

export default HomeComp;