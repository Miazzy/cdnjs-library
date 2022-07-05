    const SCREEN_TYPE_VIDEO = 'video';  //默认大屏屏幕显示类型：视频
    const SCREEN_TYPE_FRAME = 'iframe'; //默认大屏屏幕显示类型：网页

    const integrateOpsURL = '/views/screen/showroom.html';                      // 默认集维大屏地址
    const fishFarmScreenURL = 'http://qa.ygwl.net/bmsWeb/#/galleryLargeScreen'; // 默认养渔家大屏地址
    const defaultVideoURL = 'https://cdn.jsdelivr.net/gh/Miazzy/cdnjs-library@v0.0.2/scene.mp4';                                    // 默认播放视频地址

    const fishFarmName = '养渔家';                                               // 养渔家名称
    const integrateOpsName = '集维';                                             // 集维名称

    const templateDiv = `<div class="dialog-content">
                        <div class="dialog-header" >
                            <div class="dialog-header-inner" >
                                <div class="dialog-header-title" >
                                    <span class="dialog-header-title-text">设置</span>
                                </div>
                                <div class="dialog-header-close">
                                    <svg class="icon dialog-header-close-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8068"><path d="M562.281173 510.800685l294.996664-293.466821c13.94971-13.878079 14.020318-36.367279 0.14224-50.316989-13.913894-13.984503-36.367279-14.020318-50.316989-0.14224L512.034792 460.377272 219.528855 166.982082c-13.842263-13.878079-36.367279-13.94971-50.316989-0.071631-13.913894 13.878079-13.948687 36.403095-0.071631 50.352805L461.576587 510.587837 166.721139 803.876604c-13.94971 13.878079-14.020318 36.367279-0.14224 50.316989 6.939039 6.974855 16.084327 10.497075 25.229614 10.497075 9.073656 0 18.148335-3.451612 25.087375-10.354835l294.926056-293.360398 295.17472 296.064996c6.939039 6.974855 16.048511 10.462283 25.193799 10.462283 9.109472 0 18.184151-3.487428 25.12319-10.390651 13.913894-13.878079 13.94971-36.367279 0.071631-50.316989L562.281173 510.800685z" p-id="8069"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div class="dialog-container">
                            <div class="dialog-container-inner">
                                <div class="dialog-container-row">
                                    <div class="dialog-container-row-key" >
                                        <div class="dialog-container-row-key-inner" >1号屏</div>
                                    </div>
                                    <div class="dialog-container-row-input" >
                                        <input id="screen-container-url" class="dialog-container-row-input-inner screen-container-url" index="0" type="text" />
                                    </div>
                                    <div class="dialog-container-row-button" >
                                        <div class="dialog-container-row-button-inner" btnIndex="0">选择</div>
                                    </div>
                                </div>
                                <div class="dialog-container-row">
                                    <div class="dialog-container-row-key" >
                                        <div class="dialog-container-row-key-inner" >2号屏</div>
                                    </div>
                                    <div class="dialog-container-row-input" >
                                        <input id="screen-container-url" class="dialog-container-row-input-inner screen-container-url" index="1" type="text" />
                                    </div>
                                    <div class="dialog-container-row-button" >
                                        <div class="dialog-container-row-button-inner" btnIndex="1">选择</div>
                                    </div>
                                </div>
                                <div class="dialog-container-row">
                                    <div class="dialog-container-row-key" >
                                        <div class="dialog-container-row-key-inner" >3号屏</div>
                                    </div>
                                    <div class="dialog-container-row-input" >
                                        <input id="screen-container-url" class="dialog-container-row-input-inner screen-container-url" index="2" type="text" />
                                    </div>
                                    <div class="dialog-container-row-button" >
                                        <div class="dialog-container-row-button-inner" btnIndex="2">选择</div>
                                    </div>
                                </div>
                                <div class="dialog-container-row">
                                    <div class="dialog-container-row-key" >
                                        <div class="dialog-container-row-key-inner" >4号屏</div>
                                    </div>
                                    <div class="dialog-container-row-input" >
                                        <input id="screen-container-url" class="dialog-container-row-input-inner screen-container-url" index="3" type="text" />
                                    </div>
                                    <div class="dialog-container-row-button" >
                                        <div class="dialog-container-row-button-inner" btnIndex="3">选择</div>
                                    </div>
                                </div>
                                <input type="file" class="upload-btn" hidden>
                                
                            </div>
                        </div>
                        <div class="dialog-footer">
                            <div class="dialog-footer-inner">
                                <div class="dialog-footer-button" type="submit">保存</div>
                                <div class="dialog-footer-button" type="cancel">取消</div>
                            </div>
                        </div>
                    </div>`;

    const templateIconDiv = `<div class ="screen-setup-icon" index="{index}" >
                                <svg class="icon" style="width: 90%;height: 90%;text-align: center;margin: 5% 5%;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7899"><path d="M880.037 461.451c-2.896-16.078-18.396-32.444-34.473-36.066l-12.021-2.751c-28.244-8.547-53.302-27.232-69.234-54.751-15.933-27.665-19.701-59.097-12.748-87.917l3.767-11.299c4.779-15.643-1.45-37.223-14.049-47.943 0 0-11.299-9.559-43.164-27.954-31.866-18.25-45.626-23.319-45.626-23.319-15.499-5.648-37.224-0.289-48.522 11.733l-8.403 8.98c-21.436 20.278-50.26 32.589-82.123 32.589s-60.976-12.454-82.415-32.878l-8.114-8.692c-11.153-12.021-33.022-17.378-48.522-11.732 0 0-13.904 5.069-45.77 23.318-31.866 18.54-43.018 28.099-43.018 28.099-12.6 10.574-18.829 32.010-14.049 47.798l3.479 11.442c6.807 28.822 3.185 60.11-12.748 87.772s-41.273 46.497-69.659 54.899l-11.587 2.606c-15.933 3.622-31.577 19.844-34.473 36.066 0 0-2.606 14.483-2.606 51.273s2.606 51.273 2.606 51.273c2.896 16.222 18.395 32.444 34.473 36.066l11.299 2.606c28.388 8.403 53.88 27.232 69.813 55.040 15.933 27.666 19.701 59.097 12.748 87.918l-3.33 11.153c-4.779 15.643 1.45 37.223 14.048 47.943 0 0 11.299 9.559 43.164 27.954s45.625 23.319 45.625 23.319c15.499 5.647 37.224 0.289 48.522-11.733l7.966-8.547c21.579-20.423 50.549-32.878 82.56-32.878s61.121 12.6 82.56 33.022l7.966 8.547c11.153 12.021 33.022 17.383 48.522 11.732 0 0 13.904-5.069 45.77-23.318 31.866-18.396 43.018-27.954 43.018-27.954 12.6-10.574 18.829-32.154 14.048-47.943l-3.479-11.588c-6.807-28.677-3.185-59.964 12.748-87.484 15.933-27.666 41.424-46.638 69.813-55.040l11.299-2.606c15.933-3.622 31.577-19.844 34.473-36.066 0 0 2.606-14.483 2.606-51.273-0.152-36.937-2.759-51.421-2.759-51.421zM513.45 660.027c-81.256 0-147.303-65.901-147.303-147.303 0-81.256 65.901-147.159 147.303-147.159 81.256 0 147.303 65.901 147.303 147.303-0.148 81.256-66.049 147.159-147.303 147.159z" fill="#333333" p-id="7900"></path></svg>
                             </div>
                             <div class ="screen-fullscreen-icon" index="{index}" >
                             <svg class="icon" style="width: 90%;height: 90%;text-align: center;margin: 5% 5%;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2068"><path d="M160 96h192q14.016 0.992 23.008 10.016t8.992 22.496-8.992 22.496T352 160H160v192q0 14.016-8.992 23.008T128 384t-23.008-8.992T96 352V96h64z m0 832H96v-256q0-14.016 8.992-23.008T128 640t23.008 8.992T160 672v192h192q14.016 0 23.008 8.992t8.992 22.496-8.992 22.496T352 928H160zM864 96h64v256q0 14.016-8.992 23.008T896 384t-23.008-8.992T864 352V160h-192q-14.016 0-23.008-8.992T640 128.512t8.992-22.496T672 96h192z m0 832h-192q-14.016-0.992-23.008-10.016T640 895.488t8.992-22.496T672 864h192v-192q0-14.016 8.992-23.008T896 640t23.008 8.992T928 672v256h-64z" p-id="2069"></path></svg>
                             </div>
                             <div class ="screen-fullscreen-exit-icon" index="{index}" >
                                <svg class="icon" style="width: 90%;height: 90%;text-align: center;margin: 5% 5%;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1435"><path d="M391 240.9c-0.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.3c-3.1 3.1-3.1 8.2 0 11.3L280 333.6l-43.9 43.9c-4.7 4.7-1.9 12.8 4.7 13.6L401 410c5.1 0.6 9.5-3.7 8.9-8.9L391 240.9zM401.1 614.1L240.8 633c-6.6 0.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7c4.7 4.7 12.8 1.9 13.6-4.7l18.9-160.1c0.6-5.1-3.7-9.4-8.8-8.8zM622.9 409.9L783.2 391c6.6-0.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3c-3.1-3.1-8.2-3.1-11.3 0L690.3 279.9l-43.7-43.7c-4.7-4.7-12.8-1.9-13.6 4.7L614.1 401c-0.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9c4.7-4.7 1.9-12.8-4.7-13.6L623 614c-5.1-0.6-9.5 3.7-8.9 8.9L633 783.1c0.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z" p-id="1436"></path></svg>
                             </div>
                             <div class="screen-switch-icon" index="{index}" >
                                <svg class="icon" style="width: 90%;height: 90%;text-align: center;margin: 5% 5%;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1936"><path d="M258.617 607.981v65.695a224.55 224.55 0 0 0 152.392-47.384l7.539-6.463a423.594 423.594 0 0 1-33.926-59.771 146.997 146.997 0 0 1-126.005 47.923m382.86-257.389a224.55 224.55 0 0 0-152.391 47.385l-7.539 6.462a424.916 424.916 0 0 1 32.312 59.771 146.994 146.994 0 0 1 125.999-47.922v191.694c-107.693 0-131.923-48.461-161.54-107.693a290.206 290.206 0 0 0-67.31-100.155 224.554 224.554 0 0 0-152.392-49.541v65.695c107.697 0 131.929 48.461 161.545 107.693a290.224 290.224 0 0 0 67.847 97.464A224.575 224.575 0 0 0 640.4 668.834v95.846l127.62-127.62-126.543-124.923 127.619-127.619-127.619-127.623v93.697z m0 0M129.359 127.623h766.815v64.161H129.359zM129.359 191.784h62.678V895.64h-62.678zM192.037 831.721h704.137v63.919H192.037zM832.162 127.99h64.012v703.731h-64.012z" p-id="1937"></path></svg>
                             </div>
                             <div class="screen-splitview-icon" index="{index}" >
                                <svg class="icon" style="width: 90%;height: 90%;text-align: center;margin: 5% 5%;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1708"><path d="M161.05472 919.3472h701.9008a58.71616 58.71616 0 0 0 58.65472-58.65472V180.40832a58.71616 58.71616 0 0 0-58.65472-58.65472H161.09568a58.03008 58.03008 0 0 0-41.4208 17.08032A58.1632 58.1632 0 0 0 102.4 180.30592v680.38656a58.64448 58.64448 0 0 0 58.65472 58.65472z m385.15712-589.568V190.08512h306.95424v660.93056H546.21184V329.7792zM170.83392 190.08512h306.95424v660.93056H170.83392V190.08512z" fill="#0f0f0f" p-id="1709"></path></svg>
                             </div>
                             <div class="screen-fresh-icon" index="{index}">
                                <svg class="icon" style="width: 90%;height: 90%;text-align: center;margin: 5% 5%;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4047"><path d="M512 74.666667c214.229333 0 401.493333 159.274667 436.885333 368a32 32 0 0 1-39.317333 36.373333l-170.666667-42.666667a32 32 0 0 1 15.530667-62.08l119.402667 29.824c-48.106667-151.125333-191.829333-262.101333-354.432-265.386666L512 138.666667c-185.024 0-341.376 135.466667-369.024 316.458666a32 32 0 0 1-63.274667-9.664C112.128 233.322667 295.253333 74.666667 512 74.666667zM512 949.376c-214.208 0-401.493333-159.274667-436.864-368a32 32 0 0 1 42.773333-35.285333l170.666667 64a32 32 0 0 1-22.464 59.925333l-113.429333-42.538667 2.154666 6.165334c52.181333 144.042667 192.106667 248.490667 349.781334 251.669333l7.402666 0.064c183.04 0 338.261333-132.629333 368.170667-311.146667a32 32 0 0 1 63.125333 10.581334c-35.050667 209.237333-216.874667 364.586667-431.296 364.586666z" fill="#262626" p-id="4048"></path></svg>
                             </div>
                             `;

    window.modeTypeIndex = 0;  // 拼接屏参数
    window.screenContentOptions = {
        0: { type: SCREEN_TYPE_VIDEO, src: defaultVideoURL },
        1: { type: SCREEN_TYPE_FRAME, src: integrateOpsURL },
        2: { type: SCREEN_TYPE_FRAME, src: fishFarmScreenURL },
        3: { type: SCREEN_TYPE_VIDEO, src: defaultVideoURL }
    }; 
    const autoCompleteArray = [ { value: '养渔家', data: '养渔家' }, { value: '集维', data: '集维' } ];
    const contentOptions = JSON.parse(JSON.stringify(window.screenContentOptions));
    const modeTypeArray = ['0,1,2,3','0,2,1,3','0,1,3,2','0,2,3,1','1,0,3,2','1,0,2,3','1,3,2,0','1,2,0,3','2,3,1,0','2,3,0,1','2,0,1,3','2,1,3,0','3,1,2,0','3,2,1,0','3,0,1,2','3,1,0,2',];
    const playerOptions = {}; // 播放器参数
    const PLAYER_ID_SUFFIX = '_html5_api';
    const PLAYER_ID_PREFIX = 'player-index-';

    const initFrameContent = (screenContentOptions) => { //初始化拼接屏内容
      // 显示加载动画
      for(let index in screenContentOptions) { //设置拼接屏内容
        const value = screenContentOptions[index];
        const type = value['type'];
        const src = value['src']; 
        if(type == 'video'){ //隐藏iframe，显示video
          $(`.screen-iframe-content[index='${index}']`).hide().attr('src',src);
          $(`.screen-video-content[index='${index}']`).show().attr('src',src);
          startVideo(`player-index-${index}`, playerOptions, src); //设置播放内容
          setTimeout(()=>{ startPlay(index, src); }, 10);
        } else if(type == 'iframe'){ //隐藏video，显示iframe
          $(`.screen-video-content[index='${index}']`).hide().attr('src',src);
          $(`.screen-iframe-content[index='${index}']`).show().attr('src',src);
        }
      }
      $('.screen-main-container').show(); //显示拼接屏
    }

    const startVideo = (videoID = 'player-index-0', playerOptions = {} , videoUrl = './files/scene00.mp4' ) => { //设置播放内容函数
      videojs(videoID, playerOptions, function onPlayerReady() {
        this.on('loadeddata',function(){
          // this.src(videoUrl);
        });
        this.on('ended',function(){ // const index = Math.floor(Math.random() * 1000 % 4);
          if(videoUrl.startsWith('blob')){
            startVideo(videoID, playerOptions, src); //设置播放内容
            setTimeout(()=>{ startPlay(videoID.split('-')[2], src); }, 10);
          } else {
            this.src(videoUrl);
          }
        });
      });
    }

    const startPlay = (index = 0 , src = './files/scene00.mp4') => { //启动播放
      $(`#${PLAYER_ID_PREFIX}${index}${PLAYER_ID_SUFFIX}`).attr('src',src);
    }

    const autoHeightWidth = () => { // 自动调整拼接屏高宽函数
      try {
        const zoomRatio = 0.8; // 预算缩放比率
        document.getElementsByTagName('body')[0].style.zoom=zoomRatio; // 设置缩放比率
        const ratio = (window.outerWidth !== undefined && window.innerWidth !== undefined) ? window.outerWidth/window.innerWidth : 1.0; // 计算当前浏览器缩放比率
        const sheight = screen.height * (1/zoomRatio/ratio); //设置比率自适应
        const swidth = $('.screen-high').width(); //计算屏幕宽度
        // 设置动态高度
        $('.screen-high').height(sheight); //动态设置屏幕高度
        $('.screen-video-content').css({width: swidth, height:sheight}); //动态设置播放器高宽
        console.info(`set cur height:${sheight}, width:${swidth}. important. `);
      } catch (error) {
        console.error(`init height error`,error);
      } finally {
        const curHeight = $('.screen-high').height();
        if(curHeight == 500 || curHeight < screen.height * 0.8){
          setTimeout(() => { autoHeightWidth(); }, 500);
        }
      }
    }

    const initClickEvent = () => { //点击事件初始化函数

      $(`.screen-icon-content[index="0"]`).html(templateIconDiv.replaceAll('{index}',0));
      $(`.screen-icon-content[index="1"]`).html(templateIconDiv.replaceAll('{index}',1));
      $(`.screen-icon-content[index="2"]`).html(templateIconDiv.replaceAll('{index}',2));
      $(`.screen-icon-content[index="3"]`).html(templateIconDiv.replaceAll('{index}',3));
        
      // 进入全屏按钮点击事件
      $('.screen-fullscreen-icon').bind('click',(event)=>{ $(document).fullScreen(true); });

      // 退出全屏按钮点击事件
      $('.screen-fullscreen-exit-icon').bind('click',(event)=>{ $(document).fullScreen(false); });

      // 设置按钮点击事件
      $('.screen-setup-icon').bind('click',(event)=>{ 
        let btnIndex = null;
        const index = $(event.currentTarget).attr('index');
        const template = templateDiv ;
        $(`.screen-dialog-content[index="${index}"]`).html(template); // 将dialog内容添加至新dialog的div中
        $(`.screen-dialog-content[index="${index}"]`).css('opacity','1.0');
        $(`.screen-dialog-content[index="${index}"] .dialog-header-close`).bind('click',()=>{ $('.screen-dialog-content').css('opacity','0.0') });
        $(`.screen-dialog-content[index="${index}"] .dialog-footer-button[type='cancel']`).bind('click',()=>{ $('.screen-dialog-content').css('opacity','0.0') });
        $(`.screen-dialog-content[index="${index}"] .dialog-footer-button[type='submit']`).bind('click',()=>{ window.screenContentOptions = setScreenURL(window.screenContentOptions); });
        $(`.screen-dialog-content[index="${index}"] .dialog-container-row-button-inner`).bind('click', function(event) {
            btnIndex = $(this).attr('btnIndex');
            $(`.screen-dialog-content[index="${index}"] .upload-btn`).click();
        });
        $(`.screen-dialog-content[index="${index}"] .upload-btn`).on('change', function(event) { // const fileName = event.target.files[0].name;
            const fileURL = URL.createObjectURL(event.target.files[0]);
            $(`.screen-dialog-content[index="${index}"] .screen-container-url[index="${btnIndex}"]`).val(fileURL);
        });
        $(`.screen-dialog-content[index="${index}"] .screen-container-url`).autocomplete('enable');
        $(`.screen-dialog-content[index="${index}"] .screen-container-url`).autocomplete({ 
          lookup: autoCompleteArray, 
          onSelect: function (suggestion) {} 
        });
        initScreenURL(screenContentOptions);
      });

      // 模式切换按钮点击事件
      $('.screen-switch-icon').bind('click', (event)=>{
        const index = ++window.modeTypeIndex % modeTypeArray.length;
        const sequence = modeTypeArray[index];
        const seqArray = sequence.split(',');
        const scrOptions = window.screenContentOptions = {
          0: contentOptions[seqArray[0]],
          1: contentOptions[seqArray[1]],
          2: contentOptions[seqArray[2]],
          3: contentOptions[seqArray[3]]
        };
        $('.screen-container-url[index="0"]').val(scrOptions[0]['src']);
        $('.screen-container-url[index="1"]').val(scrOptions[1]['src']);
        $('.screen-container-url[index="2"]').val(scrOptions[2]['src']);
        $('.screen-container-url[index="3"]').val(scrOptions[3]['src']);
        initFrameContent(scrOptions);
      });

      // 刷新按钮点击事件
      $('.screen-fresh-icon').bind('click', (event)=>{
        vant.Toast.loading({ duration: 375, forbidClick: true, message: '刷新中...'});
        setTimeout(()=>{ window.location.reload(); }, 375);
      });

      // 点击分屏按钮
      $('.screen-splitview-icon').bind('click', (event)=>{
        const width = $('body').width();
        const swidth = screen.width;
        if(width > swidth * 4 ){
            $('body').css('width', '100%').css('overflow-x','hidden');
        } else {
            $('body').css('width', '400%').css('overflow-x','scroll');
        }
      })
    }

    const setScreenURL = (content = {}, screenContentOptions = {}) => { // 提交拼接屏内容设置
      content.screenURL0 = strTrim($('.screen-container-url[index="0"]').val());
      content.screenURL1 = strTrim($('.screen-container-url[index="1"]').val());
      content.screenURL2 = strTrim($('.screen-container-url[index="2"]').val());
      content.screenURL3 = strTrim($('.screen-container-url[index="3"]').val());

      if( isEmpty(content.screenURL0) || isEmpty(content.screenURL1) || 
        isEmpty(content.screenURL2) || isEmpty(content.screenURL3) ){
          return vant.Toast.success('提交内容不能含有空值！');
      }

      vant.Toast.loading({ duration: 975, forbidClick: true, message: '保存中...'});

      screenContentOptions[0] = contentOptions[0] = setContentType(content.screenURL0);
      screenContentOptions[1] = contentOptions[1] = setContentType(content.screenURL1);
      screenContentOptions[2] = contentOptions[2] = setContentType(content.screenURL2);
      screenContentOptions[3] = contentOptions[3] = setContentType(content.screenURL3);

      window.modeTypeIndex = 0;
      initFrameContent(screenContentOptions);

      setTimeout(() => {
        vant.Toast.success('保存成功！');
        $('.screen-dialog-content').css('opacity','0.0');
      }, 1000);
      return screenContentOptions;
    }

    const initScreenURL = (screenContentOptions) => {
      for(let index in screenContentOptions) { //设置拼接屏内容
        const value = screenContentOptions[index];
        const type = value['type'];
        const src = value['src']; 
        $(`.screen-container-url[index="${index}"]`).val(src);
      }
    }

    const isEmpty = (value) => {
      return value == '' || value == null || typeof value == 'undefined' || value.trim() == '';
    }

    const setContentType = (content , screenContentOptions = {} , index = 0)=>{ // 设置屏幕内容属性
      if(content == '养渔家' || content == '集维'){
        content = content == '养渔家' ? fishFarmScreenURL : content;
        content = content == '集维' ? integrateOpsURL : content;
      }
      if(content.endsWith('.mp4') || content.endsWith('.flv') || content.endsWith('.avi') || content.startsWith('blob')){
        screenContentOptions[index] = {type:'video',src:content};
      } else {
        screenContentOptions[index] = {type:'iframe',src:content};
      }
      return screenContentOptions[index];
    }

    const strTrim = (value = '') => {
      if(value == '' || value == null || typeof value == 'undefined' || typeof value != 'string'){
        return '';
      } else if(typeof value == 'string'){
        return value.trim();
      }
    }

    $(function() {
      initFrameContent(screenContentOptions);
      autoHeightWidth();
      initClickEvent();
    });