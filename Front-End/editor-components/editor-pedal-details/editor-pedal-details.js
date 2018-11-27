(function (window, document, undefined) {

    const doc = (document._currentScript || document.currentScript).ownerDocument;
    const template = doc.querySelector('template');

    class EditorPedalDetails extends HTMLElement {

        constructor() {
            super();

            this.root = this.attachShadow({ mode: 'closed' });
            const temp = document.importNode(template.content, true);

            this.root.appendChild(temp);

            this.setUploadEnvironnement();

            this.setUpEventListeners();

        }

        setUploadEnvironnement() {
            //-------------------- Image Upload----------------------
            // just upload and use
            //  http://tech.pro/tutorial/1383/javascript-one-language-to-rule-them-all
            var ls = window.localStorage;
            var photo = this.root.getElementById('uploadImage');
            var fileReader = new FileReader();
            var img = new Image();
            var lastImgData = ls.getItem('image');

            if (lastImgData) {
                img.src = lastImgData;
            }
            fileReader.onload = function (e) {
                console.log(typeof e.target.result, e.target.result instanceof Blob);
                img.src = e.target.result;
            };
            img.onload = () => {
                img.classList.add("menu-img");
                img.classList.add("background-image");
                img.addEventListener('click', (event) => {
                    this.editablePedal.setBackgroundImagebysrc(event.target.src);

                })
                this.root.querySelector('#background-images').appendChild(img);

            };
            photo.addEventListener('change', function () {
                var file = this.files[0];
                return file && fileReader.readAsDataURL(file);
            });
            //-----------------------------------------

        }


        setEditablePedal(editablePedal) {
            this.editablePedal = editablePedal;
            this.enableInputs();
            this.setInputListeners();
            this.refreshInputs();

            this.editablePedal.addEventListener('config-changed', (e) => {
                this.refreshInputs();
            });

        }

        setUpEventListeners() {
            console.log(this);

            this.addEventListener('preview-selected', e => {
                console.log('OKKK');
            });

            let pedalElemPreviews = this.root.querySelectorAll('pedal-elem-previews');

            pedalElemPreviews.forEach(elm => {
                elm.addEventListener('preview-selected', e => {
                    this.editablePedal.addElement(e.detail.type)
                });
            });
        }
        
        /*
        addElem(e) {
            console.log('Hello world');
        }*/

        refreshInputs() {
            for (let inputElem of this.root.querySelectorAll('input')) {
                inputElem.setAttribute('value', this.editablePedal.getAttribute(inputElem.name));
            }
        }

        setInputListeners() {
            /*// For main inputs
            for (let inputElem of this.root.querySelectorAll('input')) {
            inputElem.addEventListener('change', (event) => {
                    this.editablePedal.setAttribute(event.target.name, event.target.value);
                });
            }

            // For background images
            for (let backgroundImageElem of this.root.querySelectorAll('.background-image')) {
                backgroundImageElem.addEventListener('click', (event) => {
                    this.setBackgroundImage(event.target.alt);
                })
            }

            // For adding icons
            for (let addIcon of this.root.querySelectorAll('.add-icon')) {
                addIcon.addEventListener('click', (event) => {
                    this.addIcon(event.target.alt);
                })
            }

            // For adding knobs
            for (let addKnob of this.root.querySelectorAll('#add-knob')) {
                addKnob.addEventListener('click', (event) => {
                    this.addKnob();
                })
            }

            // For adding labels
            for (let addLabel of this.root.querySelectorAll('#add-label')) {
                console.log(addLabel)
                addLabel.addEventListener('click', (event) => {
                    this.addLabel();
                })
            }

            // For adding switches
            for (let addSwitch of this.root.querySelectorAll('#add-switch')) {
                addSwitch.addEventListener('click', (event) => {
                    this.addSwitch();
                })
            }

            // For adding sliders
            for (let addSlider of this.root.querySelectorAll('#add-slider')) {
                addSlider.addEventListener('click', (event) => {
                    this.editablePedal.addElement('slider');
                })
            }*/
        }

        enableInputs() {
            for (let inputElem of this.root.querySelectorAll('input')) {
                inputElem.disabled = false;
            }

            for (let inputElem of this.root.querySelectorAll('button')) {
                inputElem.disabled = false;
            }
        }

        setBackgroundImage(value) {
            this.editablePedal.setBackgroundImage(value);
        }

        addIcon(value) {
            pedal.addElement('icon', value);
        }

        addKnob() {
            pedal.addElement('knob');
        }

        addSwitch() {
            pedal.addElement('switch');
        }
        addLabel() {
            pedal.addElement('label');
        }

    }

    window.customElements.define('editor-pedal-details', EditorPedalDetails);
})(window, document);