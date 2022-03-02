import Vue from 'vue';
import { mount } from '@vue/test-utils';


const $router = {
    push: sinon.spy()
};

import FlightSearch from '@/components/FlightSearch'

describe('<FlightSearch>', () =>{

    it('should render a search form', async () => {

        const wrapper = mount(
            FlightSearch,
            {
                mocks:{
                    // $router:{
                    //     push: function(args){
                    //         console.log('FAKE $router.push() called', args)
                    //         expect(args.name).to.equal('SearchRes')
                    //     } // push
                    // } // $router

                    $router: $router
                } // mocks
            }
        ); // wrapper

        // console.log('text:', wrapper.text());

        expect( wrapper.text() ).to.contain('Search')


        const options = wrapper.findAll('option');
        expect( options.at(1).text() ).to.equal('SYD') 

        const button = wrapper.find('button');
        expect( button.element.tagName ).to.equal( "BUTTON" )

        await button.trigger('click')

        expect( $router.push ).to.have.been.calledWith(sinon.match({
            name: 'SearchResults',
            params: {
                origin: "SYD",
                destination: "MEL"
            }
        }))

    })

})