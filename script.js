
function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./0001.png
       ./0002.png
       ./0003.png
       ./0004.png
       ./0005.png
       ./0006.png
       ./0007.png
       ./0008.png
       ./0009.png
       ./0010.png
       ./0011.png
       ./0012.png
       ./0013.png
       ./0014.png
       ./0015.png
       ./0016.png
       ./0017.png
       ./0018.png
       ./0019.png
       ./0020.png
       ./0021.png
       ./0022.png
       ./0023.png
       ./0024.png
       ./0025.png
       ./0026.png
       ./0027.png
       ./0028.png
       ./0029.png
       ./0030.png
       ./0031.png
       ./0032.png
       ./0033.png
       ./0034.png
       ./0035.png
       ./0036.png
       ./0037.png
       ./0038.png
       ./0039.png
       ./0040.png
       ./0041.png
       ./0042.png
       ./0043.png
       ./0044.png
       ./0045.png
       ./0046.png
       ./0047.png
       ./0048.png
       ./0049.png
       ./0050.png
       ./0051.png
       ./0052.png
       ./0053.png
       ./0054.png
       ./0055.png
       ./0056.png
       ./0057.png
       ./0058.png
       ./0059.png
       ./0060.png
       ./0061.png
       ./0062.png
       ./0063.png
       ./0064.png
       ./0065.png
       ./0066.png
       ./0067.png
       ./0068.png
       ./0069.png
       ./0070.png
       ./0071.png
       ./0072.png
       ./0073.png
       ./0074.png
       ./0075.png
       ./0076.png
       ./0077.png
       ./0078.png
       ./0079.png
       ./0080.png
       ./0081.png
       ./0082.png
       ./0083.png
       ./0084.png
       ./0085.png
       ./0086.png
       ./0087.png
       ./0088.png
       ./0089.png
       ./0090.png
       ./0091.png
       ./0092.png
       ./0093.png
       ./0094.png
       ./0095.png
       ./0096.png
       ./0097.png
       ./0098.png
       ./0099.png
       ./0100.png
       ./0101.png
       ./0102.png
       ./0103.png
       ./0104.png
       ./0105.png
       ./0106.png
       ./0107.png
       ./0108.png
       ./0109.png
       ./0110.png
       ./0111.png
       ./0112.png
       ./0113.png
       ./0114.png
       ./0115.png
       ./0116.png
       ./0117.png
       ./0118.png
       ./0119.png
       ./0120.png
       ./0121.png
       ./0122.png
       ./0123.png
       ./0124.png
       ./0125.png
       ./0126.png
       ./0127.png
       ./0128.png
       ./0129.png
       ./0130.png
       ./0131.png
       ./0132.png
       ./0133.png
       ./0134.png
       ./0135.png
       ./0136.png
       ./0137.png
       ./0138.png
       ./0139.png
       ./0140.png
       ./0141.png
       ./0142.png
       ./0143.png
       ./0144.png
       ./0145.png
       ./0146.png
       ./0147.png
       ./0148.png
       ./0149.png
       ./0150.png
       ./0151.png
       ./0152.png
       ./0153.png
       ./0154.png
       ./0155.png
       ./0156.png
       ./0157.png
       ./0158.png
       ./0159.png
       ./0160.png
       ./0161.png
       ./0162.png
       ./0163.png
       ./0164.png
       ./0165.png
       ./0166.png
       ./0167.png
       ./0168.png
       ./0169.png
       ./0170.png
       ./0171.png
       ./0172.png
       ./0173.png
       ./0174.png
       ./0175.png
       ./0176.png
       ./0177.png
       ./0178.png
       ./0179.png
       ./0180.png
       ./0181.png
       ./0182.png
       ./0183.png
       ./0184.png
       ./0185.png
       ./0186.png
       ./0187.png
       ./0188.png
       ./0189.png
       ./0190.png
       ./0191.png
       ./0192.png
       ./0193.png
       ./0194.png
       ./0195.png
       ./0196.png
       ./0197.png
       ./0198.png
       ./0199.png
       ./0200.png
       ./0201.png
       ./0202.png
       ./0203.png
       ./0204.png
       ./0205.png
       ./0206.png
       ./0207.png
       ./0208.png
       ./0209.png
       ./0210.png
       ./0211.png
       ./0212.png
       ./0213.png
       ./0214.png
       ./0215.png
       ./0216.png
       ./0217.png
       ./0218.png
       ./0219.png
       ./0220.png
       ./0221.png
       ./0222.png
       ./0223.png
       ./0224.png
       ./0225.png
       ./0226.png
       ./0227.png
       ./0228.png
       ./0229.png
       ./0230.png
       ./0231.png
       ./0232.png
       ./0233.png
       ./0234.png
       ./0235.png
       ./0236.png
       ./0237.png
       ./0238.png
       ./0239.png
       ./0240.png
       ./0241.png
       ./0242.png
       ./0243.png
       ./0244.png
       ./0245.png
       ./0246.png
       ./0247.png
       ./0248.png
       ./0249.png
       ./0250.png
       ./0251.png
       ./0252.png
       ./0253.png
       ./0254.png
       ./0255.png
       ./0256.png
       ./0257.png
       ./0258.png
       ./0259.png
       ./0260.png
       ./0261.png
       ./0262.png
       ./0263.png
       ./0264.png
       ./0265.png
       ./0266.png
       ./0267.png
       ./0268.png
       ./0269.png
       ./0270.png
       ./0271.png
       ./0272.png
       ./0273.png
       ./0274.png
       ./0275.png
       ./0276.png
       ./0277.png
       ./0278.png
       ./0279.png
       ./0280.png
       ./0281.png
       ./0282.png
       ./0283.png
       ./0284.png
       ./0285.png
       ./0286.png
       ./0287.png
       ./0288.png
       ./0289.png
       ./0290.png
       ./0291.png
       ./0292.png
       ./0293.png
       ./0294.png
       ./0295.png
       ./0296.png
       ./0297.png
       ./0298.png
       ./0299.png
       ./0300.png
       ./0300.png
       ./0301.png
       ./0302.png
       ./0303.png
       ./0304.png
       ./0305.png
       ./0306.png
       ./0307.png
       ./0308.png
       ./0309.png
       ./0310.png
       ./0311.png
       ./0312.png
       ./0313.png
       ./0314.png
       ./0315.png
       ./0316.png
       ./0317.png
       ./0318.png
       ./0319.png
       ./0320.png
       ./0321.png
       ./0322.png
       ./0323.png
       ./0324.png
       ./0325.png
       ./0326.png
       ./0327.png
       ./0328.png
       ./0329.png
       ./0330.png
       ./0331.png
       ./0332.png
       ./0333.png
       ./0334.png
       ./0335.png
       ./0336.png
       ./0337.png
       ./0338.png
       ./0339.png
       ./0340.png
       ./0341.png
       ./0342.png
       ./0343.png
       ./0344.png
       ./0345.png
       ./0346.png
       ./0347.png
       ./0348.png
       ./0349.png
       ./0350.png
       ./0351.png
       ./0352.png
       ./0353.png
       ./0354.png
       ./0355.png
       ./0356.png
       ./0357.png
       ./0358.png
       ./0359.png
       ./0360.png
       ./0361.png
       ./0362.png
       ./0363.png
       ./0364.png
       ./0365.png
       ./0366.png
       ./0367.png
       ./0368.png
       ./0369.png
       ./0370.png
       ./0371.png
       ./0372.png
       ./0373.png
       ./0374.png
       ./0375.png
       ./0376.png
       ./0377.png
       ./0378.png
       ./0379.png
       ./0380.png
       ./0381.png
       ./0382.png
       ./0383.png
       ./0384.png
       ./0385.png
       ./0386.png
       ./0387.png
       ./0388.png
       ./0389.png
       ./0390.png
       ./0391.png
       ./0392.png
       ./0393.png
       ./0394.png
       ./0395.png
       ./0396.png
       ./0397.png
       ./0398.png
       ./0399.png
       ./0400.png
       ./0401.png
       ./0402.png
       ./0403.png
       ./0404.png
       ./0405.png
       ./0406.png
       ./0407.png
       ./0408.png
       ./0409.png
       ./0410.png
       ./0411.png
       ./0412.png
       ./0413.png
       ./0414.png
       ./0415.png
       ./0416.png
       ./0417.png
       ./0418.png
       ./0419.png
       ./0420.png
       ./0421.png
       ./0422.png
       ./0423.png
       ./0424.png
       ./0425.png
       ./0426.png
       ./0427.png
       ./0428.png
       ./0429.png
       ./0430.png
       ./0431.png
       ./0432.png
       ./0433.png
       ./0434.png
       ./0435.png
       ./0436.png
       ./0437.png
       ./0438.png
       ./0439.png
       ./0440.png
       ./0441.png
       ./0442.png
       ./0443.png
       ./0444.png
       ./0445.png
       ./0446.png
       ./0447.png
       ./0448.png
       ./0449.png
       ./0450.png
       ./0451.png
       ./0452.png
       ./0453.png
       ./0454.png
       ./0455.png
       ./0456.png
       ./0457.png
       ./0458.png
       ./0459.png
       ./0460.png
       ./0461.png
       ./0462.png
       ./0463.png
       ./0464.png
       ./0465.png
       ./0466.png
       ./0467.png
       ./0468.png
       ./0469.png
       ./0470.png
       ./0471.png
       ./0472.png
       ./0473.png
       ./0474.png
       ./0475.png
       ./0476.png
       ./0477.png
       ./0478.png
       ./0479.png
       ./0480.png
       ./0481.png
       ./0482.png
       ./0483.png
       ./0484.png
       ./0485.png
       ./0486.png
       ./0487.png
       ./0488.png
       ./0489.png
       ./0490.png
       ./0491.png
       ./0492.png
       ./0493.png
       ./0494.png
       ./0495.png
       ./0496.png
       ./0497.png
       ./0498.png
       ./0499.png
       ./0500.png
       ./0501.png
       ./0502.png
       ./0503.png
       ./0504.png
       ./0505.png
       ./0506.png
       ./0507.png
       ./0508.png
       ./0509.png
       ./0510.png
       ./0511.png
       ./0512.png
       ./0513.png
       ./0514.png
       ./0515.png
       ./0516.png
       ./0517.png
       ./0518.png
       ./0519.png
       ./0520.png
       ./0521.png
       ./0522.png
       ./0523.png
       ./0524.png
       ./0525.png
       ./0526.png
       ./0527.png
       ./0528.png
       ./0529.png
       ./0530.png
       ./0531.png
       ./0532.png
       ./0533.png
       ./0534.png
       ./0535.png
       ./0536.png
       ./0537.png
       ./0538.png
       ./0539.png
       ./0540.png
       ./0541.png
       ./0542.png
       ./0543.png
       ./0544.png
       ./0545.png
       ./0546.png
       ./0547.png
       ./0548.png
       ./0549.png
       ./0550.png
       ./0551.png
       ./0552.png
       ./0553.png
       ./0554.png
       ./0555.png
       ./0556.png
       ./0557.png
       ./0558.png
       ./0559.png
       ./0560.png
       ./0561.png
       ./0562.png
       ./0563.png
       ./0564.png
       ./0565.png
       ./0566.png
       ./0567.png
       ./0568.png
       ./0569.png
       ./0570.png
       ./0571.png
       ./0572.png
       ./0573.png
       ./0574.png
       ./0575.png
       ./0576.png
       ./0577.png
       ./0578.png
       ./0579.png
       ./0580.png
       ./0581.png
       ./0582.png
       ./0583.png
       ./0584.png
       ./0585.png
       ./0586.png
       ./0587.png
       ./0588.png
       ./0589.png
       ./0590.png
       ./0591.png
       ./0592.png
       ./0593.png
       ./0594.png
       ./0595.png
       ./0596.png
       ./0597.png
       ./0598.png
       ./0599.png
       ./0600.png
       ./0601.png
       ./0602.png
       ./0603.png
       ./0604.png
       ./0605.png
       ./0606.png
       ./0607.png
       ./0608.png
       ./0609.png
       ./0610.png
       ./0611.png
       ./0612.png
       ./0613.png
       ./0614.png
       ./0615.png
       ./0616.png
       ./0617.png
       ./0618.png
       ./0619.png
       ./0620.png
       ./0621.png
       ./0622.png
       ./0623.png
       ./0624.png
       ./0625.png
       ./0626.png
       ./0627.png
       ./0628.png
       ./0629.png
       ./0630.png
       ./0631.png
       ./0632.png
       ./0633.png
       ./0634.png
       ./0635.png
       ./0636.png
       ./0637.png
       ./0638.png
       ./0639.png
       ./0640.png
       ./0641.png
       ./0642.png
       ./0643.png
       ./0644.png
       ./0645.png
       ./0646.png
       ./0647.png
       ./0648.png
       ./0649.png
       ./0650.png
       ./0651.png
       ./0652.png
       ./0653.png
       ./0654.png
       ./0655.png
       ./0656.png
       ./0657.png
       ./0658.png
       ./0659.png
       ./0660.png
       ./0661.png
       ./0662.png
       ./0663.png
       ./0664.png
       ./0665.png
       ./0666.png
       ./0667.png
       ./0668.png
       ./0669.png
       ./0670.png
       ./0671.png
       ./0672.png
       ./0673.png
       ./0674.png
       ./0675.png
       ./0676.png
       ./0677.png
       ./0678.png
       ./0679.png
       ./0680.png
       ./0681.png
       ./0682.png
       ./0683.png
       ./0684.png
       ./0685.png
       ./0686.png
       ./0687.png
       ./0688.png
       ./0689.png
       ./0690.png
       ./0691.png
       ./0692.png
       ./0693.png
       ./0694.png
       ./0695.png
       ./0696.png
       ./0697.png
       ./0698.png
       ./0699.png
       ./0700.png
       ./0701.png
       ./0702.png
       ./0703.png
       ./0704.png
       ./0705.png
       ./0706.png
       ./0707.png
       ./0708.png
       ./0709.png
       ./0710.png
       ./0711.png
       ./0712.png
       ./0713.png
       ./0714.png
       ./0715.png
       ./0716.png
       ./0717.png
       ./0718.png
       ./0719.png
       ./0720.png
   
       
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 720;
  
  const images = [];
  const imageSeq = {
    frame: 0,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[0].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })

  var loader = document.getElementById("preloader");
  window.addEventListener("load",function(){
    loader.style.display="none";
    document.querySelector("h4").innerHTML = "...SCROLL TO READ !";
  });
