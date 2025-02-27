import React from 'react';

export interface Tool {
    icon?: React.ReactNode;
    name: string;
    description: string;
    category: string;
    url: string;
    isHot?: boolean;
}

const getFavicon = (url: string) => {
    return `https://t1.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=${url}`
};

// Common icon style
const ICON_STYLE = "w-10 h-10";

// Icon generator function
const generateIcon = (url: string) => (
    <img src={getFavicon(url)} className={ICON_STYLE} />
);

// Tool generator function
const createTool = (name: string, description: string, category: string, url: string, isHot?: boolean): Tool => ({
    icon: generateIcon(url),
    name,
    description,
    category,
    url,
    isHot
});

// All tools in a single array for easier maintenance
export const allTools: Tool[] = [
    /*
    *
    * 通用问答大模型。Communication
    *
    *
    * */
    createTool(
        "DeepSeek",
        "DeepSeek是一款由DeepSeek AI公司开发的AI工具产品，旨在通过其强大的自然语言处理能力为用户提供高效的信息搜索和解答服务。该产品主要针对需要快速获取准确信息的用户，如研究人员、开发者和企业用户。DeepSeek的核心功能包括自然语言查询处理和代码生成，通过这些功能，用户可以轻松地与AI进行对话，获取所需信息或生成代码。",
        "通用问答大模型",
        "https://chat.deepseek.com",
        true
    ),
    createTool(
        "豆包",
        "豆包是字节跳动公司开发的 AI，具备强大的语言处理能力和广泛的知识储备。在知识问答方面，豆包能够详细且准确地回答涵盖科学、技术、历史、文化、艺术、生活等众多领域的问题，无论是复杂的专业知识，还是日常的常识性疑问，都能给出清晰易懂的解答。",
        "通用问答大模型",
        "https://www.doubao.com/",
        true
    ),
    createTool(
        "知乎直达",
        "知乎推出的一款基于AI大模型等先进技术的产品，它以知乎社区的优质内容为核心，结合多种数据源，为用户提供了一种全新的获取可靠信息的途径。",
        "通用问答大模型",
        "https://zhida.zhihu.com",
    ),
    createTool(
        "纳米AI",
        "纳米AI搜索（N），简称纳米搜索，是三六零集团（简称“360”）研发的AI搜索产品，，支持文字、语音、拍照、视频等多种搜索方式，是一种多模态内容创作引擎",
        "通用问答大模型",
        "https://bot.n.cn/",
    ),
    createTool(
        "腾讯元宝",
        "腾讯元宝支持语音和文字搜索，涵盖微信公众号和视频号等信源。搜索结果以图片、视频、音乐和地图等形式展现；支持PDF、Word、PPT、Excel、TXT等格式文档识别，支持本地和微信上传；腾讯元宝可用于撰写报告、方案、文案和代码。设有DeepSeek R1模型集成深度思考与联网搜索功能，该模型可以利用联网搜索，确保回答的时新性和权威性。",
        "通用问答大模型",
        "https://yuanbao.tencent.com/",
    ),
    createTool(
        "智谱清言",
        "智谱清言基于智谱AI自主研发的中英双语对话模型ChatGLM2；其通用问答功能可以准确及时地回答涵盖多个领域的各类问题；可与用户进行自然、流畅的交流；它能根据用户需求模拟不同角色，以增强互动性和提升用户体验。",
        "通用问答大模型",
        "https://chatglm.cn/",
    ),
    createTool(
        "Kimi Chat",
        "Kimi是北京月之暗面科技有限公司于2023年10月9日推出的一款智能助手，主要应用场景为专业学术论文的翻译和理解、辅助分析法律问题、快速理解API开发文档等，是全球首个支持输入20万汉字的智能助手产品。",
        "通用问答大模型",
        "https://kimi.moonshot.cn/",
    ),
    createTool(
        "通义千问",
        "通义千问是阿里云推出的一个超大规模的语言模型，具有多种功能，包括多轮对话、文案创作、逻辑推理、多模态理解和多语言支持。",
        "通用问答大模型",
        "https://tongyi.aliyun.com/",
    ),
    createTool(
        "文心一言",
        "百度全新一代知识增强大语言模型",
        "通用问答大模型",
        "https://yiyan.baidu.com/",
    ),
    createTool(
        "ChatGPT",
        "ChatGPT是OpenAI开发的一款聊天机器人程序，能够基于在预训练阶段所见的模式和统计规律生成回答，还能根据聊天的上下文进行互动，真正像人类一样来聊天交流。它强大的自然语言处理能力和多模态转化能力使之可用于多个场景和领域。",
        "通用问答大模型",
        "https://chat.openai.com",
        true
    ),
    createTool(
        "万知",
        "万知是零一万物于2024年推出的一站式AI工作平台。万知可以做会议纪要、周报、写作助手，还可以解读财报、论文等各类文件，做PPT。为中英双语版本全免费。",
        "通用问答大模型",
        "https://www.wanzhi.com/",
    ),
    createTool(
        "Claude",
        "Claude，美国人工智能初创公司Anthropic发布的大型语言模型家族，拥有高级推理、视觉分析、代码生成、多语言处理、多模态等能力，该模型对标ChatGPT、Gemini等产品",
        "通用问答大模型",
        "https://www.anthropic.com/",
    ),
    createTool(
        "微软Coplit",
        "Microsoft Copilot 利用 AI 的强大功能来提高工作效率、释放创造力，并通过简单的聊天体验帮助你更好地理解信息。",
        "通用问答大模型",
        "https://copilot.microsoft.com/",
    ),
    createTool(
        "海螺AI",
        "MiniMax 基于通用大模型为用户打造的AI伙伴，可以帮你分析财报、速读长文、创作文案、智能搜索等、拍照答疑等等，也支持语音通话。10倍速获取信息、10倍速解决问题。有问题，找海螺AI。",
        "通用问答大模型",
        "https://hailuoai.com/",
    ),
    createTool(
        "Google Gemini",
        "Gemini是一款由Google DeepMind（谷歌母公司Alphabet下设立的人工智能实验室）于2023年12月6日发布的人工智能模型，可同时识别文本、图像、音频、视频和代码五种类型信息，还可以理解并生成主流编程语言（如Python、Java、C++）的高质量代码，并拥有全面的安全性评估。",
        "通用问答大模型",
        "https://gemini.google.com/",
    ),
    createTool(
        "天工-昆仑万维",
        "天工是由昆仑万维和奇点智源合作自研的大语言模型，于2023年4月17日正式发布。",
        "通用问答大模型",
        "https://www.tiangong.cn/",
    ),
    createTool(
        "讯飞星火大模型",
        "科大讯飞推出的新一代认知智能大模型，拥有跨领域的知识和语言理解能力，能够基于自然对话方式理解与执行任务。在与人自然对话互动中，提供语言理解、知识问答、逻辑推理、数学题解答、代码理解与编写等多种能力，成为职场、生活与学习等多场景...",
        "通用问答大模型",
        "https://xinghuo.xfyun.cn/",
    ),

    /*
    *
    *
    * 绘图
    *
    *
    *
    */

    createTool(
        "Midjourney",
        "Midjourney 网站致力于将人工智能技术与绘画艺术相结合，为用户提供创作、探索和分享的平台。用户可以在这里体验 AI 绘画、探索各种艺术作品，并参与社区互动。",
        "绘图",
        "https://www.midjourney.com",
        true
    ),
    createTool(
        "堆友",
        "阿里巴巴旗下AI绘画平台",
        "绘图",
        "https://d.design/",
    ),
    createTool(
        "liblib",
        "LiblibAI是国内领先的AI创作平台，拥有大量基于Stable Diffusion的AI模型资源，覆盖多个领域，包括绘画、商品摄影、图像生成等。用户可以通过该平台找到各种创作灵感和工具。",
        "绘图",
        "https://www.liblib.art/",
    ),
    createTool(
        "悠船",
        "悠船是一款由Midjourney官方推出的国内中文版AI图像生成工具，目前正处于内测阶段。该产品旨在为专业用户提供智能创意工具，支持桌面端和浏览器端使用。悠船利用先进的AI技术，帮助用户快速生成创意图像，满足设计、广告、教育等多个领域的需求。",
        "绘图",
        "https://www.youchuan.cn/",
    ),
    createTool(
        "无界",
        "无界AI是一家提供一站式AI搜索、创作、交流、分享服务的平台。用户可以通过该平台使用各种AI工具进行艺术创作和图片处理。",
        "绘图",
        "https://www.wujieai.com/",
    ),
    createTool(
        "Vega AI",
        "国内专业的ai创作平台，支持文本生成图片，图片风格转换",
        "绘图",
        "https://vegaai.net/",
    ),
    createTool(
        "妙鸭相机",
        "妙鸭相机是一款由MIAOYA团队开发的在线AI相机工具，旨在帮助用户快速生成具有专业质感的大片。该产品提供多种时尚、好玩的风格模板，让用户能够轻松打造百变照片，从而在社交圈中引爆流量。",
        "绘图",
        "https://www.miaoya.cn/",
    ),
    createTool(
        "Google Whisk",
        "Google Whisk是一款由Google开发的AI工具，属于图像生成类别。该工具旨在为用户提供一种基于图像提示生成新图像的创新方式，而非传统的文本提示。Google Whisk的目标用户包括设计师、艺术家、内容创作者等，其核心功能是通过分析用户提供的图像，生成与之风格、内容相似的新图像，以满足用户在图像创作和设计上的特定需求。",
        "绘图",
        "https://labs.google/",
    ),
    createTool(
        "吐司",
        "Create stunning artwork and images using advanced AI technology",
        "绘图",
        "https://tusiart.com/",
    ),
    createTool(
        "文心一格",
        "百度公司推出的AI艺术和创意辅助平台",
        "绘图",
        "https://yige.baidu.com/",
    ),
    createTool(
        "A1.art",
        "A1.art是由Instant Design团队开发的一款AI艺术创作平台，旨在帮助艺术爱好者和专业设计师轻松创建AI艺术作品。该平台深度整合AI技术与艺术创作，为用户提供前所未有的创作体验。A1.art的主要特点是简单易用，丰富的应用类型，以及免费的图像生成功能。",
        "绘图",
        "https://a1.art/",
    ),
    createTool(
        "阿贝智能",
        "阿贝智能是一款专为儿童和家长打造的AI绘本创作平台，旨在让孩子的创意通过更多形式得以展现，让天马行空的想法更快实现。",
        "绘图",
        "https://abeiai.com/",
    ),
    createTool(
        "Google Imagen 3",
        "Google Imagen 3是由Google开发的一种高质量文本转图像模型。该产品属于人工智能领域，主要目标用户是设计师、艺术家、内容创作者以及任何需要将文本描述转化为高质量图像的用户。",
        "绘图",
        "https://deepmind.google/",
    ),
    createTool(
        "Civitai",
        "Civitai.com是一个为用户提供各种稳定扩散大型模型训练方式的平台，涵盖了Dreambooth、textual inversion、LORA和Hypernetworks等多种训练方式。",
        "绘图",
        "https://civitai.com/",
    ),
    createTool(
        "fotor",
        "Fotor是一个功能强大的在线照片编辑平台，它结合了照片编辑、图形设计和照片拼贴的功能，旨在为用户提供一站式的图像处理解决方案。通过其直观的用户界面和丰富的功能，即使是没有专业设计背景的用户也能快速上手，创作出专业水准的作品。",
        "绘图",
        "https://www.fotor.com/",
    ),
    createTool(
        "Imagine with Meta AI",
        "ImagineMeta是由Meta公司开发的一款AI工具，旨在通过其智能助手功能帮助用户学习、创造和执行更多任务。该工具基于Llama 3.1模型，Meta AI能够回答各种问题，协助用户进行写作，提供逐步指导，并创建图像以供用户与朋友分享。ImagineMeta可在Meta的应用程序、智能眼镜和网页中使用。",
        "绘图",
        "https://www.meta.ai/",
    ),




    /*
    *
    * 视频
    *
    *
    * */

    createTool(
        "即梦AI",
        "即梦AI是由深圳市脸萌科技有限公司开发的一款AI创作工具，旨在激发艺术创意，提升绘画和视频创作体验。用户可以通过输入简单的文案或图片，快速生成优质视频片段和图片。即梦AI具备强大的语义理解能力，能够准确把握用户需求，将抽象的思路转化为视觉作品。",
        "视频",
        "https://jimeng.jianying.com/",
    ),
    createTool(
        "可灵AI",
        "可灵大模型是快手推出的文生图，图生图，图生视频的AI工具",
        "视频",
        "https://kling.kuaishou.com/",
    ),
    createTool(
        "来画",
        "来画的核心功能在于帮助用户快速制作动画视频，无需手绘或动画能力，只需选择模板并通过简单的拖拽操作即可。",
        "视频",
        "https://www.laihua.com/",
    ),
    createTool(
        "智谱清影-AI生视频",
        "智谱清影是智谱 AI 推出的视频生成工具。",
        "视频",
        "https://chatglm.cn/",
    ),
    createTool(
        "一帧妙创",
        "一帧秒创是基于新壹大模型及秒创AIGC引擎的智能AI内容生成平台该平台由新壹科技开发旨在为创作者和机构提供AI生成服务包含AI数字人AI帮写AI视频AI作画等AIGC工具一帧秒创能够将文章一键转视频一键生成数字人播报视频为企业及自媒体提供一站式视频生产全面提升内容创作效率",
        "视频",
        "https://aigc.yizhentv.com/",
    ),
    createTool(
        "白日梦",
        "白日梦是一款由光魔科技开发的文生视频类AI生成内容创作平台。该平台的核心功能包括文生视频、动态画面、AI形象生成以及保持人物/场景一致性等。它旨在帮助用户轻松地将文本内容转化为视频，满足内容创作者、教育工作者以及企业用户在视频制作方面的需求。",
        "视频",
        "https://aibrm.com/",
    ),
    createTool(
        "腾讯智影",
        "腾讯智影是一款领先的云端智能视频创作工具，旨在帮助用户实现高效、低成本的视频制作。用户可以通过腾讯智影官方网站以及企业版在线剪辑平台（腾讯智影企业版）进行视频创作。",
        "视频",
        "https://zenvideo.qq.com/",
    ),
    createTool(
        "Runway",
        "Runway是一个创意工具平台，提供视频编辑、图像生成、人工智能训练等功能。用户可以在这里访问到最新工具和软件，包括动态笔刷等创新功能。",
        "视频",
        "https://runwayml.com/",
    ),
    createTool(
        "Vidu",
        "Vidu 是由生数科技联合清华大学发布的视频大模型。vidu 是中国首个长时长、高一致性、高动态性的视频大模型。它采用原创的 diffusion 与 transformer 融合的架构 u-vit，支持一键生成长达16秒、分辨率高达1080p 的高清视频内容。该模型不仅能够模拟真实物理世界，还拥有丰富想象力，具备多镜头生成、时空一致性高等特点。",
        "视频",
        "https://jimeng.jianying.com/",
    ),
    createTool(
        "度加创作工具",
        "度加创作工具是由百度出品的AI内容生成平台，旨在降低内容生产的门槛，提升创作效率。该工具面向所有创作者，通过集成的AI能力，用户可以轻松生成视频、文章、笔记等多种形式的内容。",
        "视频",
        "https://aigc.baidu.com/",
    ),
    createTool(
        "Google Veo 2",
        "Google Veo 2是由谷歌开发的一款先进的视频生成模型。该产品旨在将文字和图像转化为逼真的视频内容。它利用了深度学习和人工智能技术，为用户提供了一种高效、简便的视频制作方式。Google Veo 2的核心功能包括自动视频生成和定制化视频编辑，满足用户在内容创作、教育、娱乐等多个领域的需求。",
        "视频",
        "https://deepmind.google/technologies/veo/veo-2/?ref=aishenqi.net",
    ),
    createTool(
        "绘影字幕",
        "绘影字幕，为您提供视频加字幕、字幕制作、字幕翻译服务。软件采用先进的语音识别技术，自动识别视频中的人声，转化成字幕。并提供翻译服务，轻松制作中英字幕、中日字幕等双语字...",
        "视频",
        "https://huiyingzimu.com/",
    ),
    createTool(
        "Rubbrband Movies",
        "RubbrbandMovies是一款由创新团队开发的一站式AI视频生成与编辑工具。它旨在为用户提供全面的视频创作解决方案，目标用户包括视频内容创作者、社交媒体影响者、企业营销团队以及任何需要高效制作视频的个人。",
        "视频",
        "https://www.rubbrband.com/",
    ),
    createTool(
        "Magic Clips by Submagic",
        "AI一键打造爆款短视频，Submagic让内容传播更高效。",
        "视频",
        "https://www.submagic.co/",
    ),
    createTool(
        "Pika Art",
        "Pika Art是一款由AI研究者、电影制作人、程序员甚至时尚设计师组成的团队开发的AI视频创作工具。它旨在将创意快速转化为现实，满足用户对高质量视频创作的需求。Pika Art的核心功能是将文本、图片或视频转化为动态场景，使用户能够轻松创建引人入胜的视觉内容。" ,
        "视频",
        "https://pika.art/",
    ),




    /*
    *
    * 音频
    *
    *
    * */

    createTool(
        "Suno",
        "SunoMusic是一款由Suno公司开发的AI音乐生成工具，旨在帮助用户快速创作高质量的音乐作品。该工具的核心用户群体包括初学者和专业音乐制作人，特别是那些希望通过简单操作就能创作出电台级音乐的用户。" ,
        "音乐",
        "https://suno.com/",
    ),
    createTool(
        "音疯",
        "AI音乐创作，一键生成专属歌曲" ,
        "音乐",
        "https://www.yinfeng.cn/",
    ),
    createTool(
        "网易天音",
        "网易天音是由中国互联网公司网易开发的一款一站式AI音乐创作工具。它旨在帮助用户轻松创作词曲、编曲以及演唱，满足音乐创作者在音乐制作方面的需求。" ,
        "音乐",
        "https://tianyin.music.163.com/",
    ),
    createTool(
        "悦音配音",
        "智能配音，千种音色，随心定制" ,
        "音乐",
        "https://yueyin.zhipianbang.com/",
    ),
    createTool(
        "大饼AI变声",
        "AI助力视频配音，轻松跨越语言障碍" ,
        "音乐",
        "https://dubbing.tech/",
    ),
    createTool(
        "逗哥配音",
        "逗哥配音，AI智能配音神器" ,
        "音乐",
        "https://www.douge.com/",
    ),
    createTool(
        "Reecho睿声",
        "睿声AI，超拟真语音克隆与合成" ,
        "音乐",
        "https://www.reecho.cn/",
    ),
    createTool(
        "魔音工坊",
        "魔音工坊是一款可以在线将文字转成语音的智能配音产品。提供不同性别、不同口音的真人声音，在你输入文字后直接配音。你可快速对短视频等需要配音的内容进行配音。" ,
        "音乐",
        "https://moyin.com/",
    ),
    createTool(
        "通义听悟",
        "阿里云通义听悟是聚焦音视频内容的工作学习AI助手，依托大模型，帮助用户记录、整理和分析音视频内容，体验用大模型做音视频笔记、整理会议记录。" ,
        "音乐",
        "https://tingwu.aliyun.com/",
    ),
    createTool(
        "Music Muse",
        "免费AI音乐生成器" ,
        "音乐",
        "https://www.musicmuse.ai/",
    ),
    createTool(
        "Musicfy AI",
        "AI赋能，音乐创作新境界" ,
        "音乐",
        "AI赋能，音乐创作新境界",
    ),
    createTool(
        "Sonauto AI",
        "AI一键生成风格各异完整歌曲" ,
        "音乐",
        "https://sonauto.ai/",
    ),
    createTool(
        "TemPolor",
        "人工智能定制免版税音乐平台" ,
        "音乐",
        "https://www.tempolor.com/",
    ),
    createTool(
        "AI Music Generator",
        "AI Music Generator is an advanced music generator producing high-quality compositions across genres. Its latest version rivals studio productions in audio quality, offering unique and personalized music creation aligned with users' creative visions." ,
        "音乐",
        "https://ai-music-generator.ai/",
    ),


    /*
       *
       * 办公
       *
       *
       * */
    createTool(
        "听脑",
        "会议录音转文字，高效整理会议要点" ,
        "办公",
        "https://itingnao.com/",
    ),
    createTool(
        "讯飞智文",
        "讯飞智文，由科大讯飞推出的一键生成ppt/word产品。" ,
        "办公",
        "https://zhiwen.xfyun.cn/",
    ),
    createTool(
        "WPS AI",
        "WPS AI，高效办公助手" ,
        "办公",
        "https://ai.wps.cn/",
    ),
    createTool(
        "有道智云",
        "有道智云，AI翻译与OCR服务提供商" ,
        "办公",
        "https://ai.youdao.com/",
    ),
    createTool(
        "得理法搜",
        "智能法律工具，助力律师高效工作" ,
        "办公",
        "https://data.delilegal.com/",
    ),
    createTool(
        "苏打办公",
        "苏打办公是一款由360公司开发的在线办公工具，旨在帮助企业和个人提升工作效率。它集成了多种办公功能，如PDF阅读、转换、合并拆分，以及图标识别文字、图片转PDF等。" ,
        "办公",
        "https://bangong.360.cn/",
    ),
    createTool(
        "MetaLaw",
        "MetaLaw是一款由Meta公司（原Facebook）开发的AI工具产品，主要服务于法律领域，尤其专注于知识产权法和互联网及数字法。该产品旨在通过人工智能技术，为法律专业人士提供高效、准确的法律服务和解决方案。" ,
        "办公",
        "https://meta.law/",
    ),
    createTool(
        "灵办AI",
        "灵办AI是一款由AIPURE开发的网页端全能AI助手，旨在提升用户的工作与学习效率。该产品支持翻译、对话、写作、AI搜索、AI阅读、文案改写、代码生成/纠正等多种功能，满足用户在翻译、信息收集、内容创作等方面的需求。" ,
        "办公",
        "https://ilingban.com/",
    ),
    createTool(
        "亿图脑图",
        "亿图脑图（MindMaster）是由深圳市亿图软件有限公司推出的一款跨平台思维导图软件。它支持Windows、Mac、Linux等桌面环境，同时也可以在线使用或在苹果、安卓等移动端上使用。" ,
        "办公",
        "https://www.edrawsoft.cn/",
    ),
    createTool(
        "歌者PPT",
        "歌者PPT（gezhe.com）是由广东宏观宇宙网络有限公司开发的一款永久免费的智能PPT生成工具。" ,
        "办公",
        "https://gezhe.com/",
    ),
    createTool(
        "islide",
        "简单好用的PPT设计工具" ,
        "办公",
        "https://www.islide.cc/",
    ),
    createTool(
        "aippt",
        "AI一键生成PPT" ,
        "办公",
        "https://www.aippt.cn/",
    ),
    createTool(
        "讯飞听见·会记",
        "讯飞听见·会记，是由科大讯飞开发的一款专注于录音转写整理的效率工具。该产品主要面向需要进行会议记录、演讲转录、媒体采访以及写作等工作的用户。" ,
        "办公",
        "https://huiji.iflyrec.com/",
    ),
    createTool(
        "笔格PPT",
        "一句话生成PPT" ,
        "办公",
        "https://bigppt.cn/",
    ),
    createTool(
        "ProcessOn",
        "ProcessOn是一款专业在线作图工具和知识分享社区，提供AI生成思维导图流程图。" ,
        "办公",
        "https://www.processon.com/",
    ),
    createTool(
        "boardmix博思白板",
        "boardmix博思白板，一个点燃团队协作和激发创意的空间，集aigc，一键PPT，思维导图，笔记文档多种创意表达能力于一体，将团队工作效率提升到新的层次。" ,
        "办公",
        "https://boardmix.cn/",
    ),




    /*
    *
    * 设计
    *
    *
    * */
    createTool(
        "MasterGo 莫高设计",
        "MasterGo/莫高设计是AI时代企业级产品设计平台，贯穿产品设计研发的全链条在线协作工具,是可协作的在线sketch、国内版figma，提供在线产品设计、原型图制作设计、网页开发设计、产品交互设计、UI和UX设计工具等功能,支持多人实时协作,可快速搭建设计系统,为产品设计师、交互设计师、工程师以及产品经理提供更简单灵活的工作模式。" ,
        "设计",
        "https://mastergo.com/",
    ),
    createTool(
        "即时设计",
        "即时设计是一款支持在线协作的专业级 UI 设计工具，支持 Sketch、Figma、XD 格式导入，海量优质设计资源即拿即用。" ,
        "设计",
        "https://js.design/",
    ),
    createTool(
        "稿定设计",
        "在线快速图片和视频编辑,不会PS也能搞定设计。海报、简历、PPT、公众号配图、电商等海量模板快速出图。三秒抠图实用便捷,抖音快手热门视频轻松搞定。海量正版授权资源,商用无忧。" ,
        "设计",
        "https://www.gaoding.com/",
    ),
    createTool(
        "标小智LOGO设计",
        "智能LOGO在线设计生成器" ,
        "设计",
        "https://www.logosc.cn/",
    ),
    createTool(
        "创客贴",
        "智能在线设计工具" ,
        "设计",
        "https://www.chuangkit.com/",
    ),
    createTool(
        "Canva可画",
        "Canva可画是一个在线设计协作平台，由Canva公司开发。它主要面向需要快速、高效完成设计任务的普通用户和专业人士，如市场营销人员、教师、学生、企业等。" ,
        "设计",
        "https://www.canva.cn/",
    ),
    createTool(
        "LogoAI Design",
        "AI赋能设计，轻松打造品牌形象。" ,
        "设计",
        "https://www.logoai.com/",
    ),
    createTool(
        "TinyPNG",
        "图片智能压缩，提升网站速度" ,
        "设计",
        "https://tinypng.com/",
    ),
    createTool(
        "iconfont",
        "矢量图标库，设计开发利器" ,
        "设计",
        "https://www.iconfont.cn/",
    ),




     /*
    *
    * 编程
    *
    *
    * */
    createTool(
        "Cursor",
        "智能AI代码编辑器" ,
        "编程",
        "https://www.cursor.com/",
    ),
    createTool(
        "GitHub Copilot",
        "人工智能编程助手" ,
        "编程",
        "https://github.com/features/copilot",
    ),
    createTool(
        "通义灵码",
        "智能AI代码编辑器" ,
        "编程",
        "https://lingma.aliyun.com/",
    ),
    createTool(
        "CodeGeeX",
        "CodeGeeX是一个基于AI大模型的编程辅助工具，可以实现自动代码生成、代码翻译、自动编写注释等功能，支持20多种编程语言。" ,
        "编程",
        "https://codegeex.cn/",
    ),
    createTool(
        "Gemini Code Assist",
        "谷歌AI智能代码辅助，加速开发效率" ,
        "编程",
        "https://codeassist.google/",
    ),
    createTool(
        "Devv",
        "最懂程序员的新一代 AI 搜索引擎" ,
        "编程",
        "https://devv.ai/",
    ),
    createTool(
        "CodeSandbox",
        "云上协同开发，秒级重启环境" ,
        "编程",
        "https://codesandbox.io/",
    ),
    createTool(
        "OpenBolt",
        "AI全栈项目快速构建利器" ,
        "编程",
        "https://openbolt.dev/",
    ),
    createTool(
        "TestSprite",
        "首款软件测试全自动化AI代理TestSprite" ,
        "编程",
        "https://www.testsprite.com/",
    ),
    createTool(
        "Tempo Labs",
        "人工智能驱动的React可视化编辑器" ,
        "编程",
        "https://www.tempo.new/",
    ),
    createTool(
        "Depth AI",
        "深入理解代码库，助您高效开发的人工智能",
        "编程",
        "https://www.trydepth.ai/",
    ),
    createTool(
        "bolt.new",
        "一键全栈开发，高效部署网络应用" ,
        "编程",
        "https://bolt.new/",
    ),
    createTool(
        "Static Website Hosting",
        "一键托管您的静态网站，简单快捷" ,
        "编程",
        "https://static.app/",
    ),
    createTool(
        "Chat2DB Local",
        "本地智能数据库工具，一键生成SQL，高效分析数据" ,
        "编程",
        "https://chat2db-ai.com/",
    ),
    createTool(
        "扣子",
        "智能化工作流智能体" ,
        "编程",
        "https://www.coze.cn/",
    ),
    createTool(
        "Tailwind Scanner",
        "Tailwind CSS 一站式开发工具" ,
        "编程",
        "https://www.tailwindscanner.com/",
    )

];



// Get all unique categories
export const allCategories = ['全部', ...new Set(allTools.map(tool => tool.category))];