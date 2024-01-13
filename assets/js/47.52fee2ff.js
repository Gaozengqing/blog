(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{336:function(s,a,t){"use strict";t.r(a);var r=t(12),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[s._v("#")]),s._v(" 入门 🎉")]),s._v(" "),a("h2",{attrs:{id:"一、安装和启动mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装和启动mysql"}},[s._v("#")]),s._v(" 一、安装和启动Mysql")]),s._v(" "),a("h3",{attrs:{id:"流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[s._v("#")]),s._v(" 流程")]),s._v(" "),a("ol",[a("li",[s._v("安装MySQL服务")]),s._v(" "),a("li",[s._v("创建MySQL配置文件")]),s._v(" "),a("li",[s._v("初始化MySQL数据库")]),s._v(" "),a("li",[s._v("启动MySQL服务")])]),s._v(" "),a("h3",{attrs:{id:"安装命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装命令"}},[s._v("#")]),s._v(" 安装命令")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqld "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("install MySQL服务名称\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"卸载命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载命令"}},[s._v("#")]),s._v(" 卸载命令")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqld "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("remove MySQL服务名称\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"mysql配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql配置文件"}},[s._v("#")]),s._v(" Mysql配置文件")]),s._v(" "),a("p",[s._v("需要存放在MySQL安装目录命名为my.ini(windows)或my.cnf(Linux环境)")]),s._v(" "),a("h4",{attrs:{id:"常用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用配置"}},[s._v("#")]),s._v(" 常用配置")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nbasedir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MySQL安装目录\ndatadir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MySQL数据库文件的存放目录\nport"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("port：MySQL客户端连接服务器端使用的端口号，默认为3306")]),s._v(" "),a("h3",{attrs:{id:"初始化mysql数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化mysql数据库"}},[s._v("#")]),s._v(" 初始化MySQL数据库")]),s._v(" "),a("p",[s._v("两种方式")]),s._v(" "),a("ol",[a("li",[s._v("mysqld --initialize-insecure (不会为默认用户root生成密码)")]),s._v(" "),a("li",[s._v("mysqld --initialize --console(自动为默认用户root生成随机密码)")])]),s._v(" "),a("h3",{attrs:{id:"启动mysql服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动mysql服务"}},[s._v("#")]),s._v(" 启动MySQL服务")]),s._v(" "),a("p",[s._v("net start MySQL服务名称")]),s._v(" "),a("h3",{attrs:{id:"停止mysql服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止mysql服务"}},[s._v("#")]),s._v(" 停止MySQL服务")]),s._v(" "),a("p",[s._v("net stop MySQL服务名称")]),s._v(" "),a("h2",{attrs:{id:"二、mysql的登录和退出-密码设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、mysql的登录和退出-密码设置"}},[s._v("#")]),s._v(" 二、Mysql的登录和退出，密码设置")]),s._v(" "),a("h3",{attrs:{id:"登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[s._v("#")]),s._v(" 登录")]),s._v(" "),a("ol",[a("li",[s._v("明文\nmysql -h hostname -u username -ppassword\n-h是MySQL的主机名或ip\n-u用户名\n-p密码")]),s._v(" "),a("li",[s._v("非明文\nmysql -h hostname -u username -p 回车 之后再数密码")])]),s._v(" "),a("h3",{attrs:{id:"退出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#退出"}},[s._v("#")]),s._v(" 退出")]),s._v(" "),a("p",[s._v("exit; 或 quit;")]),s._v(" "),a("h3",{attrs:{id:"配置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[s._v("#")]),s._v(" 配置环境变量")]),s._v(" "),a("p",[s._v("以管理员身份运行命令提示符，将MySQL安装目录\\bin配置到PATH环境变量中。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("setx PATH "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%PATH%;MySQL安装目录\\bin"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("测试是否成功:在非MySQL安装目录的bin中登录MySQL")]),s._v(" "),a("h3",{attrs:{id:"修改密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改密码"}},[s._v("#")]),s._v(" 修改密码")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式如下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'新密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# eg:打开命令提示符，使用root用户登录MySQL，登录成功后将root用户的密码设置为123456。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"扩展-intellij-idea图形化管理工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展-intellij-idea图形化管理工具"}},[s._v("#")]),s._v(" 扩展-IntelliJ IDEA图形化管理工具")]),s._v(" "),a("p",[s._v("教程地址\nhttps://blog.csdn.net/m0_67906358/article/details/129449631")]),s._v(" "),a("h2",{attrs:{id:"三、数据库设计-了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、数据库设计-了解"}},[s._v("#")]),s._v(" 三、数据库设计(了解)")]),s._v(" "),a("h3",{attrs:{id:"_6个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6个阶段"}},[s._v("#")]),s._v(" 6个阶段")]),s._v(" "),a("ol",[a("li",[s._v("需求分析")]),s._v(" "),a("li",[s._v("概念结构设计")]),s._v(" "),a("li",[s._v("逻辑结构设计")]),s._v(" "),a("li",[s._v("物理结构设计")]),s._v(" "),a("li",[s._v("数据库实施")]),s._v(" "),a("li",[s._v("数据库运行与维护")])]),s._v(" "),a("h6",{attrs:{id:"_1、数据库设计人员需要分析用户的需求-将分析的结果记录下来-形成需求分析报告。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、数据库设计人员需要分析用户的需求-将分析的结果记录下来-形成需求分析报告。"}},[s._v("#")]),s._v(" 1、数据库设计人员需要分析用户的需求，将分析的结果记录下来，形成需求分析报告。")]),s._v(" "),a("h6",{attrs:{id:"_2、整个数据库设计的关键阶段-通过对用户的需求进行综合、归纳与抽象-形成一个概念数据模型。一般通过绘制e-r图-直观呈现数据库设计人员对用户需求的理解。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、整个数据库设计的关键阶段-通过对用户的需求进行综合、归纳与抽象-形成一个概念数据模型。一般通过绘制e-r图-直观呈现数据库设计人员对用户需求的理解。"}},[s._v("#")]),s._v(" 2、整个数据库设计的关键阶段，通过对用户的需求进行综合、归纳与抽象，形成一个概念数据模型。一般通过绘制E-R图，直观呈现数据库设计人员对用户需求的理解。")]),s._v(" "),a("h6",{attrs:{id:"_3、将e-r图转换为数据库管理系统所支持的数据模型-如关系模型-完成实体、属性和联系的转换。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、将e-r图转换为数据库管理系统所支持的数据模型-如关系模型-完成实体、属性和联系的转换。"}},[s._v("#")]),s._v(" 3、将E-R图转换为数据库管理系统所支持的数据模型（如关系模型），完成实体、属性和联系的转换。")]),s._v(" "),a("h6",{attrs:{id:"_4、为逻辑数据模型确定数据库的存储结构、文件类型等。通常数据库管理系统为了保证其独立性与可移植性-承担了大部分任务-数据库设计人员只需考虑硬件、操作系统的特性-为数据表选择合适的存储引擎-为字段选择合适的数据类型-以及评估磁盘空间需求等工作。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、为逻辑数据模型确定数据库的存储结构、文件类型等。通常数据库管理系统为了保证其独立性与可移植性-承担了大部分任务-数据库设计人员只需考虑硬件、操作系统的特性-为数据表选择合适的存储引擎-为字段选择合适的数据类型-以及评估磁盘空间需求等工作。"}},[s._v("#")]),s._v(" 4、为逻辑数据模型确定数据库的存储结构、文件类型等。通常数据库管理系统为了保证其独立性与可移植性，承担了大部分任务，数据库设计人员只需考虑硬件、操作系统的特性，为数据表选择合适的存储引擎，为字段选择合适的数据类型，以及评估磁盘空间需求等工作。")]),s._v(" "),a("h6",{attrs:{id:"_5、设计人员根据逻辑设计和物理设计的结果建立数据库-编写与调试应用程序-组织数据入库-并进行试运行。如使用sql语句创建数据库、数据表等。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、设计人员根据逻辑设计和物理设计的结果建立数据库-编写与调试应用程序-组织数据入库-并进行试运行。如使用sql语句创建数据库、数据表等。"}},[s._v("#")]),s._v(" 5、设计人员根据逻辑设计和物理设计的结果建立数据库，编写与调试应用程序，组织数据入库，并进行试运行。如使用SQL语句创建数据库、数据表等。")]),s._v(" "),a("h6",{attrs:{id:"_6、在数据库运行和维护阶段-将数据库应用系统正式投入运行-在运行过程中不断进行一些维护、调整、备份和升级等工作。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、在数据库运行和维护阶段-将数据库应用系统正式投入运行-在运行过程中不断进行一些维护、调整、备份和升级等工作。"}},[s._v("#")]),s._v(" 6、在数据库运行和维护阶段，将数据库应用系统正式投入运行，在运行过程中不断进行一些维护、调整、备份和升级等工作。")]),s._v(" "),a("h3",{attrs:{id:"数据库设计范式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库设计范式"}},[s._v("#")]),s._v(" 数据库设计范式")]),s._v(" "),a("p",[s._v("概念：数据库设计对数据的存储性能、数据的操作有很大影响。为了避免不规范的数据造成数据冗余，以及出现插入、删除、更新操作异常等情况，就要满足一定的规范化要求。为了规范化数据库，数据库技术专家们提出了各种范式（Normal Form）。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("指数据表的每一列都是不可分割的基本数据项，同一列中不能有多个值，即数据表中不能有重复的字段，一个字段不能有多个值。\n第一范式遵从"),a("b",[s._v("原子性")]),s._v("，字段不可再分。")])]),s._v(" "),a("li",[a("p",[s._v("实体的字段完全依赖于主键，不能仅依赖主键的一部分（对于复合主键而言）。\n第二范式遵从"),a("b",[s._v("唯一性")]),s._v("，非主键字段需完全依赖主键。")])]),s._v(" "),a("li",[a("p",[s._v("要求一张数据表中每一列数据都和主键直接相关，而不能间接相关。\n第三范式就是非主键字段不能相互依赖。")])])]),s._v(" "),a("h4",{attrs:{id:"关系代数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系代数"}},[s._v("#")]),s._v(" 关系代数")]),s._v(" "),a("p",[s._v("一、 集合运算符\n笛卡儿积、并、交、差\n二、关系运算符\n除，选择，投影，连接")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("提示内容")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("警告内容")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("危险")]),s._v(" "),a("p",[s._v("危险内容")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("详情")]),s._v(" "),a("p",[s._v("详情内容")])])])}),[],!1,null,null,null);a.default=e.exports}}]);