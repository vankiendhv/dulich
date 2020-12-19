import React from 'react'
import PropTypes from 'prop-types'

function Trailer(props) {
    return (
        <div>
            <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-body mb-0 p-0">
                            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <span class="mr-4">Spread the word!</span>
                            <a type="button" class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>
                            <a type="button" class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>
                            <a type="button" class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>
                            <a type="button" class="btn-floating btn-sm btn-ins"><i class="fab fa-aedin-in"></i></a>
                            <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <a><button data-toggle="modal" data-target="#modal1">
                ok
      </button></a>
        </div>
    )
}

Trailer.propTypes = {

}

export default Trailer

