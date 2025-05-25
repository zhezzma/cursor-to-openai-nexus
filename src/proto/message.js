/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GetPromptDryRunRequest = (function() {

    /**
     * Properties of a GetPromptDryRunRequest.
     * @exports IGetPromptDryRunRequest
     * @interface IGetPromptDryRunRequest
     * @property {string|null} [userInput] GetPromptDryRunRequest userInput
     * @property {boolean|null} [preprocessingFlag] GetPromptDryRunRequest preprocessingFlag
     * @property {string|null} [conversationId] GetPromptDryRunRequest conversationId
     * @property {Array.<number>|null} [capabilities] GetPromptDryRunRequest capabilities
     * @property {boolean|null} [maxModeEnabled] GetPromptDryRunRequest maxModeEnabled
     * @property {boolean|null} [agentMode] GetPromptDryRunRequest agentMode
     * @property {string|null} [prompt] GetPromptDryRunRequest prompt
     * @property {boolean|null} [controlFlag] GetPromptDryRunRequest controlFlag
     * @property {IFileContext|null} [fileContext] GetPromptDryRunRequest fileContext
     * @property {ISystemEnvironment|null} [systemInfo] GetPromptDryRunRequest systemInfo
     * @property {IWorkspaceContext|null} [workspaceContext] GetPromptDryRunRequest workspaceContext
     * @property {IMaxModeSettings|null} [maxSettings] GetPromptDryRunRequest maxSettings
     */

    /**
     * Constructs a new GetPromptDryRunRequest.
     * @exports GetPromptDryRunRequest
     * @classdesc Represents a GetPromptDryRunRequest.
     * @implements IGetPromptDryRunRequest
     * @constructor
     * @param {IGetPromptDryRunRequest=} [properties] Properties to set
     */
    function GetPromptDryRunRequest(properties) {
        this.capabilities = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetPromptDryRunRequest userInput.
     * @member {string|null|undefined} userInput
     * @memberof GetPromptDryRunRequest
     * @instance
     */
    GetPromptDryRunRequest.prototype.userInput = null;

    /**
     * GetPromptDryRunRequest preprocessingFlag.
     * @member {boolean} preprocessingFlag
     * @memberof GetPromptDryRunRequest
     * @instance
     */
    GetPromptDryRunRequest.prototype.preprocessingFlag = false;

    /**
     * GetPromptDryRunRequest conversationId.
     * @member {string} conversationId
     * @memberof GetPromptDryRunRequest
     * @instance
     */
    GetPromptDryRunRequest.prototype.conversationId = "";

    /**
     * GetPromptDryRunRequest capabilities.
     * @member {Array.<number>} capabilities
     * @memberof GetPromptDryRunRequest
     * @instance
     */
    GetPromptDryRunRequest.prototype.capabilities = $util.emptyArray;

    /**
     * GetPromptDryRunRequest maxModeEnabled.
     * @member {boolean} maxModeEnabled
     * @memberof GetPromptDryRunRequest
     * @instance
     */
    GetPromptDryRunRequest.prototype.maxModeEnabled = false;

    /**
     * GetPromptDryRunRequest agentMode.
     * @member {boolean} agentMode
     * @memberof GetPromptDryRunRequest
     * @instance
     */
    GetPromptDryRunRequest.prototype.agentMode = false;

    /**
     * GetPromptDryRunRequest prompt.
     * @member {string|null|undefined} prompt
     * @memberof GetPromptDryRunRequest
     * @instance
     */
    GetPromptDryRunRequest.prototype.prompt = null;

    /**
     * GetPromptDryRunRequest controlFlag.
     * @member {boolean} controlFlag
     * @memberof GetPromptDryRunRequest
     * @instance
     */
    GetPromptDryRunRequest.prototype.controlFlag = false;

    /**
     * GetPromptDryRunRequest fileContext.
     * @member {IFileContext|null|undefined} fileContext
     * @memberof GetPromptDryRunRequest
     * @instance
     */
    GetPromptDryRunRequest.prototype.fileContext = null;

    /**
     * GetPromptDryRunRequest systemInfo.
     * @member {ISystemEnvironment|null|undefined} systemInfo
     * @memberof GetPromptDryRunRequest
     * @instance
     */
    GetPromptDryRunRequest.prototype.systemInfo = null;

    /**
     * GetPromptDryRunRequest workspaceContext.
     * @member {IWorkspaceContext|null|undefined} workspaceContext
     * @memberof GetPromptDryRunRequest
     * @instance
     */
    GetPromptDryRunRequest.prototype.workspaceContext = null;

    /**
     * GetPromptDryRunRequest maxSettings.
     * @member {IMaxModeSettings|null|undefined} maxSettings
     * @memberof GetPromptDryRunRequest
     * @instance
     */
    GetPromptDryRunRequest.prototype.maxSettings = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(GetPromptDryRunRequest.prototype, "_userInput", {
        get: $util.oneOfGetter($oneOfFields = ["userInput"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(GetPromptDryRunRequest.prototype, "_prompt", {
        get: $util.oneOfGetter($oneOfFields = ["prompt"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new GetPromptDryRunRequest instance using the specified properties.
     * @function create
     * @memberof GetPromptDryRunRequest
     * @static
     * @param {IGetPromptDryRunRequest=} [properties] Properties to set
     * @returns {GetPromptDryRunRequest} GetPromptDryRunRequest instance
     */
    GetPromptDryRunRequest.create = function create(properties) {
        return new GetPromptDryRunRequest(properties);
    };

    /**
     * Encodes the specified GetPromptDryRunRequest message. Does not implicitly {@link GetPromptDryRunRequest.verify|verify} messages.
     * @function encode
     * @memberof GetPromptDryRunRequest
     * @static
     * @param {IGetPromptDryRunRequest} message GetPromptDryRunRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetPromptDryRunRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userInput != null && Object.hasOwnProperty.call(message, "userInput"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userInput);
        if (message.preprocessingFlag != null && Object.hasOwnProperty.call(message, "preprocessingFlag"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.preprocessingFlag);
        if (message.conversationId != null && Object.hasOwnProperty.call(message, "conversationId"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.conversationId);
        if (message.fileContext != null && Object.hasOwnProperty.call(message, "fileContext"))
            $root.FileContext.encode(message.fileContext, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.capabilities != null && message.capabilities.length) {
            writer.uint32(/* id 19, wireType 2 =*/154).fork();
            for (var i = 0; i < message.capabilities.length; ++i)
                writer.int32(message.capabilities[i]);
            writer.ldelim();
        }
        if (message.maxModeEnabled != null && Object.hasOwnProperty.call(message, "maxModeEnabled"))
            writer.uint32(/* id 21, wireType 0 =*/168).bool(message.maxModeEnabled);
        if (message.systemInfo != null && Object.hasOwnProperty.call(message, "systemInfo"))
            $root.SystemEnvironment.encode(message.systemInfo, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        if (message.workspaceContext != null && Object.hasOwnProperty.call(message, "workspaceContext"))
            $root.WorkspaceContext.encode(message.workspaceContext, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
        if (message.maxSettings != null && Object.hasOwnProperty.call(message, "maxSettings"))
            $root.MaxModeSettings.encode(message.maxSettings, writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
        if (message.agentMode != null && Object.hasOwnProperty.call(message, "agentMode"))
            writer.uint32(/* id 42, wireType 0 =*/336).bool(message.agentMode);
        if (message.prompt != null && Object.hasOwnProperty.call(message, "prompt"))
            writer.uint32(/* id 50, wireType 2 =*/402).string(message.prompt);
        if (message.controlFlag != null && Object.hasOwnProperty.call(message, "controlFlag"))
            writer.uint32(/* id 63, wireType 0 =*/504).bool(message.controlFlag);
        return writer;
    };

    /**
     * Encodes the specified GetPromptDryRunRequest message, length delimited. Does not implicitly {@link GetPromptDryRunRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetPromptDryRunRequest
     * @static
     * @param {IGetPromptDryRunRequest} message GetPromptDryRunRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetPromptDryRunRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetPromptDryRunRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GetPromptDryRunRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetPromptDryRunRequest} GetPromptDryRunRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetPromptDryRunRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetPromptDryRunRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.userInput = reader.string();
                    break;
                }
            case 2: {
                    message.preprocessingFlag = reader.bool();
                    break;
                }
            case 13: {
                    message.conversationId = reader.string();
                    break;
                }
            case 19: {
                    if (!(message.capabilities && message.capabilities.length))
                        message.capabilities = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.capabilities.push(reader.int32());
                    } else
                        message.capabilities.push(reader.int32());
                    break;
                }
            case 21: {
                    message.maxModeEnabled = reader.bool();
                    break;
                }
            case 42: {
                    message.agentMode = reader.bool();
                    break;
                }
            case 50: {
                    message.prompt = reader.string();
                    break;
                }
            case 63: {
                    message.controlFlag = reader.bool();
                    break;
                }
            case 15: {
                    message.fileContext = $root.FileContext.decode(reader, reader.uint32());
                    break;
                }
            case 26: {
                    message.systemInfo = $root.SystemEnvironment.decode(reader, reader.uint32());
                    break;
                }
            case 30: {
                    message.workspaceContext = $root.WorkspaceContext.decode(reader, reader.uint32());
                    break;
                }
            case 35: {
                    message.maxSettings = $root.MaxModeSettings.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetPromptDryRunRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetPromptDryRunRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetPromptDryRunRequest} GetPromptDryRunRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetPromptDryRunRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetPromptDryRunRequest message.
     * @function verify
     * @memberof GetPromptDryRunRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetPromptDryRunRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.userInput != null && message.hasOwnProperty("userInput")) {
            properties._userInput = 1;
            if (!$util.isString(message.userInput))
                return "userInput: string expected";
        }
        if (message.preprocessingFlag != null && message.hasOwnProperty("preprocessingFlag"))
            if (typeof message.preprocessingFlag !== "boolean")
                return "preprocessingFlag: boolean expected";
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            if (!$util.isString(message.conversationId))
                return "conversationId: string expected";
        if (message.capabilities != null && message.hasOwnProperty("capabilities")) {
            if (!Array.isArray(message.capabilities))
                return "capabilities: array expected";
            for (var i = 0; i < message.capabilities.length; ++i)
                if (!$util.isInteger(message.capabilities[i]))
                    return "capabilities: integer[] expected";
        }
        if (message.maxModeEnabled != null && message.hasOwnProperty("maxModeEnabled"))
            if (typeof message.maxModeEnabled !== "boolean")
                return "maxModeEnabled: boolean expected";
        if (message.agentMode != null && message.hasOwnProperty("agentMode"))
            if (typeof message.agentMode !== "boolean")
                return "agentMode: boolean expected";
        if (message.prompt != null && message.hasOwnProperty("prompt")) {
            properties._prompt = 1;
            if (!$util.isString(message.prompt))
                return "prompt: string expected";
        }
        if (message.controlFlag != null && message.hasOwnProperty("controlFlag"))
            if (typeof message.controlFlag !== "boolean")
                return "controlFlag: boolean expected";
        if (message.fileContext != null && message.hasOwnProperty("fileContext")) {
            var error = $root.FileContext.verify(message.fileContext);
            if (error)
                return "fileContext." + error;
        }
        if (message.systemInfo != null && message.hasOwnProperty("systemInfo")) {
            var error = $root.SystemEnvironment.verify(message.systemInfo);
            if (error)
                return "systemInfo." + error;
        }
        if (message.workspaceContext != null && message.hasOwnProperty("workspaceContext")) {
            var error = $root.WorkspaceContext.verify(message.workspaceContext);
            if (error)
                return "workspaceContext." + error;
        }
        if (message.maxSettings != null && message.hasOwnProperty("maxSettings")) {
            var error = $root.MaxModeSettings.verify(message.maxSettings);
            if (error)
                return "maxSettings." + error;
        }
        return null;
    };

    /**
     * Creates a GetPromptDryRunRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetPromptDryRunRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetPromptDryRunRequest} GetPromptDryRunRequest
     */
    GetPromptDryRunRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GetPromptDryRunRequest)
            return object;
        var message = new $root.GetPromptDryRunRequest();
        if (object.userInput != null)
            message.userInput = String(object.userInput);
        if (object.preprocessingFlag != null)
            message.preprocessingFlag = Boolean(object.preprocessingFlag);
        if (object.conversationId != null)
            message.conversationId = String(object.conversationId);
        if (object.capabilities) {
            if (!Array.isArray(object.capabilities))
                throw TypeError(".GetPromptDryRunRequest.capabilities: array expected");
            message.capabilities = [];
            for (var i = 0; i < object.capabilities.length; ++i)
                message.capabilities[i] = object.capabilities[i] | 0;
        }
        if (object.maxModeEnabled != null)
            message.maxModeEnabled = Boolean(object.maxModeEnabled);
        if (object.agentMode != null)
            message.agentMode = Boolean(object.agentMode);
        if (object.prompt != null)
            message.prompt = String(object.prompt);
        if (object.controlFlag != null)
            message.controlFlag = Boolean(object.controlFlag);
        if (object.fileContext != null) {
            if (typeof object.fileContext !== "object")
                throw TypeError(".GetPromptDryRunRequest.fileContext: object expected");
            message.fileContext = $root.FileContext.fromObject(object.fileContext);
        }
        if (object.systemInfo != null) {
            if (typeof object.systemInfo !== "object")
                throw TypeError(".GetPromptDryRunRequest.systemInfo: object expected");
            message.systemInfo = $root.SystemEnvironment.fromObject(object.systemInfo);
        }
        if (object.workspaceContext != null) {
            if (typeof object.workspaceContext !== "object")
                throw TypeError(".GetPromptDryRunRequest.workspaceContext: object expected");
            message.workspaceContext = $root.WorkspaceContext.fromObject(object.workspaceContext);
        }
        if (object.maxSettings != null) {
            if (typeof object.maxSettings !== "object")
                throw TypeError(".GetPromptDryRunRequest.maxSettings: object expected");
            message.maxSettings = $root.MaxModeSettings.fromObject(object.maxSettings);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetPromptDryRunRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetPromptDryRunRequest
     * @static
     * @param {GetPromptDryRunRequest} message GetPromptDryRunRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetPromptDryRunRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.capabilities = [];
        if (options.defaults) {
            object.preprocessingFlag = false;
            object.conversationId = "";
            object.fileContext = null;
            object.maxModeEnabled = false;
            object.systemInfo = null;
            object.workspaceContext = null;
            object.maxSettings = null;
            object.agentMode = false;
            object.controlFlag = false;
        }
        if (message.userInput != null && message.hasOwnProperty("userInput")) {
            object.userInput = message.userInput;
            if (options.oneofs)
                object._userInput = "userInput";
        }
        if (message.preprocessingFlag != null && message.hasOwnProperty("preprocessingFlag"))
            object.preprocessingFlag = message.preprocessingFlag;
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            object.conversationId = message.conversationId;
        if (message.fileContext != null && message.hasOwnProperty("fileContext"))
            object.fileContext = $root.FileContext.toObject(message.fileContext, options);
        if (message.capabilities && message.capabilities.length) {
            object.capabilities = [];
            for (var j = 0; j < message.capabilities.length; ++j)
                object.capabilities[j] = message.capabilities[j];
        }
        if (message.maxModeEnabled != null && message.hasOwnProperty("maxModeEnabled"))
            object.maxModeEnabled = message.maxModeEnabled;
        if (message.systemInfo != null && message.hasOwnProperty("systemInfo"))
            object.systemInfo = $root.SystemEnvironment.toObject(message.systemInfo, options);
        if (message.workspaceContext != null && message.hasOwnProperty("workspaceContext"))
            object.workspaceContext = $root.WorkspaceContext.toObject(message.workspaceContext, options);
        if (message.maxSettings != null && message.hasOwnProperty("maxSettings"))
            object.maxSettings = $root.MaxModeSettings.toObject(message.maxSettings, options);
        if (message.agentMode != null && message.hasOwnProperty("agentMode"))
            object.agentMode = message.agentMode;
        if (message.prompt != null && message.hasOwnProperty("prompt")) {
            object.prompt = message.prompt;
            if (options.oneofs)
                object._prompt = "prompt";
        }
        if (message.controlFlag != null && message.hasOwnProperty("controlFlag"))
            object.controlFlag = message.controlFlag;
        return object;
    };

    /**
     * Converts this GetPromptDryRunRequest to JSON.
     * @function toJSON
     * @memberof GetPromptDryRunRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetPromptDryRunRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetPromptDryRunRequest
     * @function getTypeUrl
     * @memberof GetPromptDryRunRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetPromptDryRunRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetPromptDryRunRequest";
    };

    return GetPromptDryRunRequest;
})();

$root.GetPromptDryRunResponse = (function() {

    /**
     * Properties of a GetPromptDryRunResponse.
     * @exports IGetPromptDryRunResponse
     * @interface IGetPromptDryRunResponse
     * @property {string|null} [content] GetPromptDryRunResponse content
     * @property {boolean|null} [success] GetPromptDryRunResponse success
     * @property {string|null} [errorMessage] GetPromptDryRunResponse errorMessage
     * @property {IMaxModeResponse|null} [maxResponse] GetPromptDryRunResponse maxResponse
     * @property {IMessageThinking|null} [thinking] GetPromptDryRunResponse thinking
     */

    /**
     * Constructs a new GetPromptDryRunResponse.
     * @exports GetPromptDryRunResponse
     * @classdesc Represents a GetPromptDryRunResponse.
     * @implements IGetPromptDryRunResponse
     * @constructor
     * @param {IGetPromptDryRunResponse=} [properties] Properties to set
     */
    function GetPromptDryRunResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetPromptDryRunResponse content.
     * @member {string} content
     * @memberof GetPromptDryRunResponse
     * @instance
     */
    GetPromptDryRunResponse.prototype.content = "";

    /**
     * GetPromptDryRunResponse success.
     * @member {boolean} success
     * @memberof GetPromptDryRunResponse
     * @instance
     */
    GetPromptDryRunResponse.prototype.success = false;

    /**
     * GetPromptDryRunResponse errorMessage.
     * @member {string} errorMessage
     * @memberof GetPromptDryRunResponse
     * @instance
     */
    GetPromptDryRunResponse.prototype.errorMessage = "";

    /**
     * GetPromptDryRunResponse maxResponse.
     * @member {IMaxModeResponse|null|undefined} maxResponse
     * @memberof GetPromptDryRunResponse
     * @instance
     */
    GetPromptDryRunResponse.prototype.maxResponse = null;

    /**
     * GetPromptDryRunResponse thinking.
     * @member {IMessageThinking|null|undefined} thinking
     * @memberof GetPromptDryRunResponse
     * @instance
     */
    GetPromptDryRunResponse.prototype.thinking = null;

    /**
     * Creates a new GetPromptDryRunResponse instance using the specified properties.
     * @function create
     * @memberof GetPromptDryRunResponse
     * @static
     * @param {IGetPromptDryRunResponse=} [properties] Properties to set
     * @returns {GetPromptDryRunResponse} GetPromptDryRunResponse instance
     */
    GetPromptDryRunResponse.create = function create(properties) {
        return new GetPromptDryRunResponse(properties);
    };

    /**
     * Encodes the specified GetPromptDryRunResponse message. Does not implicitly {@link GetPromptDryRunResponse.verify|verify} messages.
     * @function encode
     * @memberof GetPromptDryRunResponse
     * @static
     * @param {IGetPromptDryRunResponse} message GetPromptDryRunResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetPromptDryRunResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.success);
        if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorMessage);
        if (message.maxResponse != null && Object.hasOwnProperty.call(message, "maxResponse"))
            $root.MaxModeResponse.encode(message.maxResponse, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.thinking != null && Object.hasOwnProperty.call(message, "thinking"))
            $root.MessageThinking.encode(message.thinking, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetPromptDryRunResponse message, length delimited. Does not implicitly {@link GetPromptDryRunResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetPromptDryRunResponse
     * @static
     * @param {IGetPromptDryRunResponse} message GetPromptDryRunResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetPromptDryRunResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetPromptDryRunResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GetPromptDryRunResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetPromptDryRunResponse} GetPromptDryRunResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetPromptDryRunResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetPromptDryRunResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.content = reader.string();
                    break;
                }
            case 2: {
                    message.success = reader.bool();
                    break;
                }
            case 3: {
                    message.errorMessage = reader.string();
                    break;
                }
            case 10: {
                    message.maxResponse = $root.MaxModeResponse.decode(reader, reader.uint32());
                    break;
                }
            case 25: {
                    message.thinking = $root.MessageThinking.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetPromptDryRunResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetPromptDryRunResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetPromptDryRunResponse} GetPromptDryRunResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetPromptDryRunResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetPromptDryRunResponse message.
     * @function verify
     * @memberof GetPromptDryRunResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetPromptDryRunResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
            if (!$util.isString(message.errorMessage))
                return "errorMessage: string expected";
        if (message.maxResponse != null && message.hasOwnProperty("maxResponse")) {
            var error = $root.MaxModeResponse.verify(message.maxResponse);
            if (error)
                return "maxResponse." + error;
        }
        if (message.thinking != null && message.hasOwnProperty("thinking")) {
            var error = $root.MessageThinking.verify(message.thinking);
            if (error)
                return "thinking." + error;
        }
        return null;
    };

    /**
     * Creates a GetPromptDryRunResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetPromptDryRunResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetPromptDryRunResponse} GetPromptDryRunResponse
     */
    GetPromptDryRunResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.GetPromptDryRunResponse)
            return object;
        var message = new $root.GetPromptDryRunResponse();
        if (object.content != null)
            message.content = String(object.content);
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.errorMessage != null)
            message.errorMessage = String(object.errorMessage);
        if (object.maxResponse != null) {
            if (typeof object.maxResponse !== "object")
                throw TypeError(".GetPromptDryRunResponse.maxResponse: object expected");
            message.maxResponse = $root.MaxModeResponse.fromObject(object.maxResponse);
        }
        if (object.thinking != null) {
            if (typeof object.thinking !== "object")
                throw TypeError(".GetPromptDryRunResponse.thinking: object expected");
            message.thinking = $root.MessageThinking.fromObject(object.thinking);
        }
        return message;
    };

    /**
     * Creates a plain object from a GetPromptDryRunResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetPromptDryRunResponse
     * @static
     * @param {GetPromptDryRunResponse} message GetPromptDryRunResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetPromptDryRunResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.content = "";
            object.success = false;
            object.errorMessage = "";
            object.maxResponse = null;
            object.thinking = null;
        }
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
            object.errorMessage = message.errorMessage;
        if (message.maxResponse != null && message.hasOwnProperty("maxResponse"))
            object.maxResponse = $root.MaxModeResponse.toObject(message.maxResponse, options);
        if (message.thinking != null && message.hasOwnProperty("thinking"))
            object.thinking = $root.MessageThinking.toObject(message.thinking, options);
        return object;
    };

    /**
     * Converts this GetPromptDryRunResponse to JSON.
     * @function toJSON
     * @memberof GetPromptDryRunResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetPromptDryRunResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetPromptDryRunResponse
     * @function getTypeUrl
     * @memberof GetPromptDryRunResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetPromptDryRunResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetPromptDryRunResponse";
    };

    return GetPromptDryRunResponse;
})();

$root.FileContext = (function() {

    /**
     * Properties of a FileContext.
     * @exports IFileContext
     * @interface IFileContext
     * @property {string|null} [workspacePath] FileContext workspacePath
     * @property {string|null} [currentFile] FileContext currentFile
     * @property {Uint8Array|null} [fileContent] FileContext fileContent
     * @property {Array.<IFileReference>|null} [fileReferences] FileContext fileReferences
     * @property {string|null} [projectType] FileContext projectType
     */

    /**
     * Constructs a new FileContext.
     * @exports FileContext
     * @classdesc Represents a FileContext.
     * @implements IFileContext
     * @constructor
     * @param {IFileContext=} [properties] Properties to set
     */
    function FileContext(properties) {
        this.fileReferences = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FileContext workspacePath.
     * @member {string} workspacePath
     * @memberof FileContext
     * @instance
     */
    FileContext.prototype.workspacePath = "";

    /**
     * FileContext currentFile.
     * @member {string} currentFile
     * @memberof FileContext
     * @instance
     */
    FileContext.prototype.currentFile = "";

    /**
     * FileContext fileContent.
     * @member {Uint8Array} fileContent
     * @memberof FileContext
     * @instance
     */
    FileContext.prototype.fileContent = $util.newBuffer([]);

    /**
     * FileContext fileReferences.
     * @member {Array.<IFileReference>} fileReferences
     * @memberof FileContext
     * @instance
     */
    FileContext.prototype.fileReferences = $util.emptyArray;

    /**
     * FileContext projectType.
     * @member {string} projectType
     * @memberof FileContext
     * @instance
     */
    FileContext.prototype.projectType = "";

    /**
     * Creates a new FileContext instance using the specified properties.
     * @function create
     * @memberof FileContext
     * @static
     * @param {IFileContext=} [properties] Properties to set
     * @returns {FileContext} FileContext instance
     */
    FileContext.create = function create(properties) {
        return new FileContext(properties);
    };

    /**
     * Encodes the specified FileContext message. Does not implicitly {@link FileContext.verify|verify} messages.
     * @function encode
     * @memberof FileContext
     * @static
     * @param {IFileContext} message FileContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileContext.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.workspacePath != null && Object.hasOwnProperty.call(message, "workspacePath"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.workspacePath);
        if (message.currentFile != null && Object.hasOwnProperty.call(message, "currentFile"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.currentFile);
        if (message.fileContent != null && Object.hasOwnProperty.call(message, "fileContent"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.fileContent);
        if (message.fileReferences != null && message.fileReferences.length)
            for (var i = 0; i < message.fileReferences.length; ++i)
                $root.FileReference.encode(message.fileReferences[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.projectType != null && Object.hasOwnProperty.call(message, "projectType"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.projectType);
        return writer;
    };

    /**
     * Encodes the specified FileContext message, length delimited. Does not implicitly {@link FileContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FileContext
     * @static
     * @param {IFileContext} message FileContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileContext.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FileContext message from the specified reader or buffer.
     * @function decode
     * @memberof FileContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FileContext} FileContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileContext.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.workspacePath = reader.string();
                    break;
                }
            case 2: {
                    message.currentFile = reader.string();
                    break;
                }
            case 3: {
                    message.fileContent = reader.bytes();
                    break;
                }
            case 4: {
                    if (!(message.fileReferences && message.fileReferences.length))
                        message.fileReferences = [];
                    message.fileReferences.push($root.FileReference.decode(reader, reader.uint32()));
                    break;
                }
            case 5: {
                    message.projectType = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FileContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FileContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FileContext} FileContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileContext.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FileContext message.
     * @function verify
     * @memberof FileContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FileContext.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.workspacePath != null && message.hasOwnProperty("workspacePath"))
            if (!$util.isString(message.workspacePath))
                return "workspacePath: string expected";
        if (message.currentFile != null && message.hasOwnProperty("currentFile"))
            if (!$util.isString(message.currentFile))
                return "currentFile: string expected";
        if (message.fileContent != null && message.hasOwnProperty("fileContent"))
            if (!(message.fileContent && typeof message.fileContent.length === "number" || $util.isString(message.fileContent)))
                return "fileContent: buffer expected";
        if (message.fileReferences != null && message.hasOwnProperty("fileReferences")) {
            if (!Array.isArray(message.fileReferences))
                return "fileReferences: array expected";
            for (var i = 0; i < message.fileReferences.length; ++i) {
                var error = $root.FileReference.verify(message.fileReferences[i]);
                if (error)
                    return "fileReferences." + error;
            }
        }
        if (message.projectType != null && message.hasOwnProperty("projectType"))
            if (!$util.isString(message.projectType))
                return "projectType: string expected";
        return null;
    };

    /**
     * Creates a FileContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FileContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FileContext} FileContext
     */
    FileContext.fromObject = function fromObject(object) {
        if (object instanceof $root.FileContext)
            return object;
        var message = new $root.FileContext();
        if (object.workspacePath != null)
            message.workspacePath = String(object.workspacePath);
        if (object.currentFile != null)
            message.currentFile = String(object.currentFile);
        if (object.fileContent != null)
            if (typeof object.fileContent === "string")
                $util.base64.decode(object.fileContent, message.fileContent = $util.newBuffer($util.base64.length(object.fileContent)), 0);
            else if (object.fileContent.length >= 0)
                message.fileContent = object.fileContent;
        if (object.fileReferences) {
            if (!Array.isArray(object.fileReferences))
                throw TypeError(".FileContext.fileReferences: array expected");
            message.fileReferences = [];
            for (var i = 0; i < object.fileReferences.length; ++i) {
                if (typeof object.fileReferences[i] !== "object")
                    throw TypeError(".FileContext.fileReferences: object expected");
                message.fileReferences[i] = $root.FileReference.fromObject(object.fileReferences[i]);
            }
        }
        if (object.projectType != null)
            message.projectType = String(object.projectType);
        return message;
    };

    /**
     * Creates a plain object from a FileContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FileContext
     * @static
     * @param {FileContext} message FileContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FileContext.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.fileReferences = [];
        if (options.defaults) {
            object.workspacePath = "";
            object.currentFile = "";
            if (options.bytes === String)
                object.fileContent = "";
            else {
                object.fileContent = [];
                if (options.bytes !== Array)
                    object.fileContent = $util.newBuffer(object.fileContent);
            }
            object.projectType = "";
        }
        if (message.workspacePath != null && message.hasOwnProperty("workspacePath"))
            object.workspacePath = message.workspacePath;
        if (message.currentFile != null && message.hasOwnProperty("currentFile"))
            object.currentFile = message.currentFile;
        if (message.fileContent != null && message.hasOwnProperty("fileContent"))
            object.fileContent = options.bytes === String ? $util.base64.encode(message.fileContent, 0, message.fileContent.length) : options.bytes === Array ? Array.prototype.slice.call(message.fileContent) : message.fileContent;
        if (message.fileReferences && message.fileReferences.length) {
            object.fileReferences = [];
            for (var j = 0; j < message.fileReferences.length; ++j)
                object.fileReferences[j] = $root.FileReference.toObject(message.fileReferences[j], options);
        }
        if (message.projectType != null && message.hasOwnProperty("projectType"))
            object.projectType = message.projectType;
        return object;
    };

    /**
     * Converts this FileContext to JSON.
     * @function toJSON
     * @memberof FileContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FileContext.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FileContext
     * @function getTypeUrl
     * @memberof FileContext
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FileContext.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FileContext";
    };

    return FileContext;
})();

$root.SystemEnvironment = (function() {

    /**
     * Properties of a SystemEnvironment.
     * @exports ISystemEnvironment
     * @interface ISystemEnvironment
     * @property {string|null} [platform] SystemEnvironment platform
     * @property {string|null} [architecture] SystemEnvironment architecture
     * @property {string|null} [osVersion] SystemEnvironment osVersion
     * @property {string|null} [executablePath] SystemEnvironment executablePath
     * @property {string|null} [shellPath] SystemEnvironment shellPath
     * @property {string|null} [timestamp] SystemEnvironment timestamp
     * @property {string|null} [timezone] SystemEnvironment timezone
     * @property {string|null} [clientVersion] SystemEnvironment clientVersion
     * @property {string|null} [configVersion] SystemEnvironment configVersion
     */

    /**
     * Constructs a new SystemEnvironment.
     * @exports SystemEnvironment
     * @classdesc Represents a SystemEnvironment.
     * @implements ISystemEnvironment
     * @constructor
     * @param {ISystemEnvironment=} [properties] Properties to set
     */
    function SystemEnvironment(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SystemEnvironment platform.
     * @member {string} platform
     * @memberof SystemEnvironment
     * @instance
     */
    SystemEnvironment.prototype.platform = "";

    /**
     * SystemEnvironment architecture.
     * @member {string} architecture
     * @memberof SystemEnvironment
     * @instance
     */
    SystemEnvironment.prototype.architecture = "";

    /**
     * SystemEnvironment osVersion.
     * @member {string} osVersion
     * @memberof SystemEnvironment
     * @instance
     */
    SystemEnvironment.prototype.osVersion = "";

    /**
     * SystemEnvironment executablePath.
     * @member {string} executablePath
     * @memberof SystemEnvironment
     * @instance
     */
    SystemEnvironment.prototype.executablePath = "";

    /**
     * SystemEnvironment shellPath.
     * @member {string} shellPath
     * @memberof SystemEnvironment
     * @instance
     */
    SystemEnvironment.prototype.shellPath = "";

    /**
     * SystemEnvironment timestamp.
     * @member {string} timestamp
     * @memberof SystemEnvironment
     * @instance
     */
    SystemEnvironment.prototype.timestamp = "";

    /**
     * SystemEnvironment timezone.
     * @member {string} timezone
     * @memberof SystemEnvironment
     * @instance
     */
    SystemEnvironment.prototype.timezone = "";

    /**
     * SystemEnvironment clientVersion.
     * @member {string} clientVersion
     * @memberof SystemEnvironment
     * @instance
     */
    SystemEnvironment.prototype.clientVersion = "";

    /**
     * SystemEnvironment configVersion.
     * @member {string} configVersion
     * @memberof SystemEnvironment
     * @instance
     */
    SystemEnvironment.prototype.configVersion = "";

    /**
     * Creates a new SystemEnvironment instance using the specified properties.
     * @function create
     * @memberof SystemEnvironment
     * @static
     * @param {ISystemEnvironment=} [properties] Properties to set
     * @returns {SystemEnvironment} SystemEnvironment instance
     */
    SystemEnvironment.create = function create(properties) {
        return new SystemEnvironment(properties);
    };

    /**
     * Encodes the specified SystemEnvironment message. Does not implicitly {@link SystemEnvironment.verify|verify} messages.
     * @function encode
     * @memberof SystemEnvironment
     * @static
     * @param {ISystemEnvironment} message SystemEnvironment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SystemEnvironment.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.platform);
        if (message.architecture != null && Object.hasOwnProperty.call(message, "architecture"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.architecture);
        if (message.osVersion != null && Object.hasOwnProperty.call(message, "osVersion"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.osVersion);
        if (message.executablePath != null && Object.hasOwnProperty.call(message, "executablePath"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.executablePath);
        if (message.shellPath != null && Object.hasOwnProperty.call(message, "shellPath"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.shellPath);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.timestamp);
        if (message.timezone != null && Object.hasOwnProperty.call(message, "timezone"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.timezone);
        if (message.clientVersion != null && Object.hasOwnProperty.call(message, "clientVersion"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.clientVersion);
        if (message.configVersion != null && Object.hasOwnProperty.call(message, "configVersion"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.configVersion);
        return writer;
    };

    /**
     * Encodes the specified SystemEnvironment message, length delimited. Does not implicitly {@link SystemEnvironment.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SystemEnvironment
     * @static
     * @param {ISystemEnvironment} message SystemEnvironment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SystemEnvironment.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SystemEnvironment message from the specified reader or buffer.
     * @function decode
     * @memberof SystemEnvironment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SystemEnvironment} SystemEnvironment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SystemEnvironment.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SystemEnvironment();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.platform = reader.string();
                    break;
                }
            case 2: {
                    message.architecture = reader.string();
                    break;
                }
            case 3: {
                    message.osVersion = reader.string();
                    break;
                }
            case 4: {
                    message.executablePath = reader.string();
                    break;
                }
            case 5: {
                    message.shellPath = reader.string();
                    break;
                }
            case 6: {
                    message.timestamp = reader.string();
                    break;
                }
            case 7: {
                    message.timezone = reader.string();
                    break;
                }
            case 8: {
                    message.clientVersion = reader.string();
                    break;
                }
            case 9: {
                    message.configVersion = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SystemEnvironment message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SystemEnvironment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SystemEnvironment} SystemEnvironment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SystemEnvironment.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SystemEnvironment message.
     * @function verify
     * @memberof SystemEnvironment
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SystemEnvironment.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.platform != null && message.hasOwnProperty("platform"))
            if (!$util.isString(message.platform))
                return "platform: string expected";
        if (message.architecture != null && message.hasOwnProperty("architecture"))
            if (!$util.isString(message.architecture))
                return "architecture: string expected";
        if (message.osVersion != null && message.hasOwnProperty("osVersion"))
            if (!$util.isString(message.osVersion))
                return "osVersion: string expected";
        if (message.executablePath != null && message.hasOwnProperty("executablePath"))
            if (!$util.isString(message.executablePath))
                return "executablePath: string expected";
        if (message.shellPath != null && message.hasOwnProperty("shellPath"))
            if (!$util.isString(message.shellPath))
                return "shellPath: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isString(message.timestamp))
                return "timestamp: string expected";
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            if (!$util.isString(message.timezone))
                return "timezone: string expected";
        if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
            if (!$util.isString(message.clientVersion))
                return "clientVersion: string expected";
        if (message.configVersion != null && message.hasOwnProperty("configVersion"))
            if (!$util.isString(message.configVersion))
                return "configVersion: string expected";
        return null;
    };

    /**
     * Creates a SystemEnvironment message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SystemEnvironment
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SystemEnvironment} SystemEnvironment
     */
    SystemEnvironment.fromObject = function fromObject(object) {
        if (object instanceof $root.SystemEnvironment)
            return object;
        var message = new $root.SystemEnvironment();
        if (object.platform != null)
            message.platform = String(object.platform);
        if (object.architecture != null)
            message.architecture = String(object.architecture);
        if (object.osVersion != null)
            message.osVersion = String(object.osVersion);
        if (object.executablePath != null)
            message.executablePath = String(object.executablePath);
        if (object.shellPath != null)
            message.shellPath = String(object.shellPath);
        if (object.timestamp != null)
            message.timestamp = String(object.timestamp);
        if (object.timezone != null)
            message.timezone = String(object.timezone);
        if (object.clientVersion != null)
            message.clientVersion = String(object.clientVersion);
        if (object.configVersion != null)
            message.configVersion = String(object.configVersion);
        return message;
    };

    /**
     * Creates a plain object from a SystemEnvironment message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SystemEnvironment
     * @static
     * @param {SystemEnvironment} message SystemEnvironment
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SystemEnvironment.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.platform = "";
            object.architecture = "";
            object.osVersion = "";
            object.executablePath = "";
            object.shellPath = "";
            object.timestamp = "";
            object.timezone = "";
            object.clientVersion = "";
            object.configVersion = "";
        }
        if (message.platform != null && message.hasOwnProperty("platform"))
            object.platform = message.platform;
        if (message.architecture != null && message.hasOwnProperty("architecture"))
            object.architecture = message.architecture;
        if (message.osVersion != null && message.hasOwnProperty("osVersion"))
            object.osVersion = message.osVersion;
        if (message.executablePath != null && message.hasOwnProperty("executablePath"))
            object.executablePath = message.executablePath;
        if (message.shellPath != null && message.hasOwnProperty("shellPath"))
            object.shellPath = message.shellPath;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            object.timezone = message.timezone;
        if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
            object.clientVersion = message.clientVersion;
        if (message.configVersion != null && message.hasOwnProperty("configVersion"))
            object.configVersion = message.configVersion;
        return object;
    };

    /**
     * Converts this SystemEnvironment to JSON.
     * @function toJSON
     * @memberof SystemEnvironment
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SystemEnvironment.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SystemEnvironment
     * @function getTypeUrl
     * @memberof SystemEnvironment
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SystemEnvironment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SystemEnvironment";
    };

    return SystemEnvironment;
})();

$root.WorkspaceContext = (function() {

    /**
     * Properties of a WorkspaceContext.
     * @exports IWorkspaceContext
     * @interface IWorkspaceContext
     * @property {string|null} [workspaceId] WorkspaceContext workspaceId
     * @property {string|null} [rootPath] WorkspaceContext rootPath
     * @property {string|null} [currentDirectory] WorkspaceContext currentDirectory
     * @property {string|null} [projectConfig] WorkspaceContext projectConfig
     * @property {IGitInfo|null} [gitInfo] WorkspaceContext gitInfo
     */

    /**
     * Constructs a new WorkspaceContext.
     * @exports WorkspaceContext
     * @classdesc Represents a WorkspaceContext.
     * @implements IWorkspaceContext
     * @constructor
     * @param {IWorkspaceContext=} [properties] Properties to set
     */
    function WorkspaceContext(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WorkspaceContext workspaceId.
     * @member {string} workspaceId
     * @memberof WorkspaceContext
     * @instance
     */
    WorkspaceContext.prototype.workspaceId = "";

    /**
     * WorkspaceContext rootPath.
     * @member {string} rootPath
     * @memberof WorkspaceContext
     * @instance
     */
    WorkspaceContext.prototype.rootPath = "";

    /**
     * WorkspaceContext currentDirectory.
     * @member {string} currentDirectory
     * @memberof WorkspaceContext
     * @instance
     */
    WorkspaceContext.prototype.currentDirectory = "";

    /**
     * WorkspaceContext projectConfig.
     * @member {string} projectConfig
     * @memberof WorkspaceContext
     * @instance
     */
    WorkspaceContext.prototype.projectConfig = "";

    /**
     * WorkspaceContext gitInfo.
     * @member {IGitInfo|null|undefined} gitInfo
     * @memberof WorkspaceContext
     * @instance
     */
    WorkspaceContext.prototype.gitInfo = null;

    /**
     * Creates a new WorkspaceContext instance using the specified properties.
     * @function create
     * @memberof WorkspaceContext
     * @static
     * @param {IWorkspaceContext=} [properties] Properties to set
     * @returns {WorkspaceContext} WorkspaceContext instance
     */
    WorkspaceContext.create = function create(properties) {
        return new WorkspaceContext(properties);
    };

    /**
     * Encodes the specified WorkspaceContext message. Does not implicitly {@link WorkspaceContext.verify|verify} messages.
     * @function encode
     * @memberof WorkspaceContext
     * @static
     * @param {IWorkspaceContext} message WorkspaceContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WorkspaceContext.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.workspaceId != null && Object.hasOwnProperty.call(message, "workspaceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.workspaceId);
        if (message.rootPath != null && Object.hasOwnProperty.call(message, "rootPath"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.rootPath);
        if (message.currentDirectory != null && Object.hasOwnProperty.call(message, "currentDirectory"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.currentDirectory);
        if (message.projectConfig != null && Object.hasOwnProperty.call(message, "projectConfig"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.projectConfig);
        if (message.gitInfo != null && Object.hasOwnProperty.call(message, "gitInfo"))
            $root.GitInfo.encode(message.gitInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified WorkspaceContext message, length delimited. Does not implicitly {@link WorkspaceContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WorkspaceContext
     * @static
     * @param {IWorkspaceContext} message WorkspaceContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WorkspaceContext.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WorkspaceContext message from the specified reader or buffer.
     * @function decode
     * @memberof WorkspaceContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WorkspaceContext} WorkspaceContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WorkspaceContext.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WorkspaceContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.workspaceId = reader.string();
                    break;
                }
            case 2: {
                    message.rootPath = reader.string();
                    break;
                }
            case 3: {
                    message.currentDirectory = reader.string();
                    break;
                }
            case 4: {
                    message.projectConfig = reader.string();
                    break;
                }
            case 5: {
                    message.gitInfo = $root.GitInfo.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WorkspaceContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WorkspaceContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WorkspaceContext} WorkspaceContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WorkspaceContext.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WorkspaceContext message.
     * @function verify
     * @memberof WorkspaceContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WorkspaceContext.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.workspaceId != null && message.hasOwnProperty("workspaceId"))
            if (!$util.isString(message.workspaceId))
                return "workspaceId: string expected";
        if (message.rootPath != null && message.hasOwnProperty("rootPath"))
            if (!$util.isString(message.rootPath))
                return "rootPath: string expected";
        if (message.currentDirectory != null && message.hasOwnProperty("currentDirectory"))
            if (!$util.isString(message.currentDirectory))
                return "currentDirectory: string expected";
        if (message.projectConfig != null && message.hasOwnProperty("projectConfig"))
            if (!$util.isString(message.projectConfig))
                return "projectConfig: string expected";
        if (message.gitInfo != null && message.hasOwnProperty("gitInfo")) {
            var error = $root.GitInfo.verify(message.gitInfo);
            if (error)
                return "gitInfo." + error;
        }
        return null;
    };

    /**
     * Creates a WorkspaceContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WorkspaceContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WorkspaceContext} WorkspaceContext
     */
    WorkspaceContext.fromObject = function fromObject(object) {
        if (object instanceof $root.WorkspaceContext)
            return object;
        var message = new $root.WorkspaceContext();
        if (object.workspaceId != null)
            message.workspaceId = String(object.workspaceId);
        if (object.rootPath != null)
            message.rootPath = String(object.rootPath);
        if (object.currentDirectory != null)
            message.currentDirectory = String(object.currentDirectory);
        if (object.projectConfig != null)
            message.projectConfig = String(object.projectConfig);
        if (object.gitInfo != null) {
            if (typeof object.gitInfo !== "object")
                throw TypeError(".WorkspaceContext.gitInfo: object expected");
            message.gitInfo = $root.GitInfo.fromObject(object.gitInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a WorkspaceContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WorkspaceContext
     * @static
     * @param {WorkspaceContext} message WorkspaceContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WorkspaceContext.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.workspaceId = "";
            object.rootPath = "";
            object.currentDirectory = "";
            object.projectConfig = "";
            object.gitInfo = null;
        }
        if (message.workspaceId != null && message.hasOwnProperty("workspaceId"))
            object.workspaceId = message.workspaceId;
        if (message.rootPath != null && message.hasOwnProperty("rootPath"))
            object.rootPath = message.rootPath;
        if (message.currentDirectory != null && message.hasOwnProperty("currentDirectory"))
            object.currentDirectory = message.currentDirectory;
        if (message.projectConfig != null && message.hasOwnProperty("projectConfig"))
            object.projectConfig = message.projectConfig;
        if (message.gitInfo != null && message.hasOwnProperty("gitInfo"))
            object.gitInfo = $root.GitInfo.toObject(message.gitInfo, options);
        return object;
    };

    /**
     * Converts this WorkspaceContext to JSON.
     * @function toJSON
     * @memberof WorkspaceContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WorkspaceContext.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for WorkspaceContext
     * @function getTypeUrl
     * @memberof WorkspaceContext
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    WorkspaceContext.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/WorkspaceContext";
    };

    return WorkspaceContext;
})();

$root.GitInfo = (function() {

    /**
     * Properties of a GitInfo.
     * @exports IGitInfo
     * @interface IGitInfo
     * @property {string|null} [branch] GitInfo branch
     * @property {string|null} [commitHash] GitInfo commitHash
     * @property {boolean|null} [hasUncommittedChanges] GitInfo hasUncommittedChanges
     * @property {string|null} [remoteUrl] GitInfo remoteUrl
     */

    /**
     * Constructs a new GitInfo.
     * @exports GitInfo
     * @classdesc Represents a GitInfo.
     * @implements IGitInfo
     * @constructor
     * @param {IGitInfo=} [properties] Properties to set
     */
    function GitInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GitInfo branch.
     * @member {string} branch
     * @memberof GitInfo
     * @instance
     */
    GitInfo.prototype.branch = "";

    /**
     * GitInfo commitHash.
     * @member {string} commitHash
     * @memberof GitInfo
     * @instance
     */
    GitInfo.prototype.commitHash = "";

    /**
     * GitInfo hasUncommittedChanges.
     * @member {boolean} hasUncommittedChanges
     * @memberof GitInfo
     * @instance
     */
    GitInfo.prototype.hasUncommittedChanges = false;

    /**
     * GitInfo remoteUrl.
     * @member {string} remoteUrl
     * @memberof GitInfo
     * @instance
     */
    GitInfo.prototype.remoteUrl = "";

    /**
     * Creates a new GitInfo instance using the specified properties.
     * @function create
     * @memberof GitInfo
     * @static
     * @param {IGitInfo=} [properties] Properties to set
     * @returns {GitInfo} GitInfo instance
     */
    GitInfo.create = function create(properties) {
        return new GitInfo(properties);
    };

    /**
     * Encodes the specified GitInfo message. Does not implicitly {@link GitInfo.verify|verify} messages.
     * @function encode
     * @memberof GitInfo
     * @static
     * @param {IGitInfo} message GitInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GitInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.branch != null && Object.hasOwnProperty.call(message, "branch"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.branch);
        if (message.commitHash != null && Object.hasOwnProperty.call(message, "commitHash"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.commitHash);
        if (message.hasUncommittedChanges != null && Object.hasOwnProperty.call(message, "hasUncommittedChanges"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.hasUncommittedChanges);
        if (message.remoteUrl != null && Object.hasOwnProperty.call(message, "remoteUrl"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.remoteUrl);
        return writer;
    };

    /**
     * Encodes the specified GitInfo message, length delimited. Does not implicitly {@link GitInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GitInfo
     * @static
     * @param {IGitInfo} message GitInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GitInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GitInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GitInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GitInfo} GitInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GitInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GitInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.branch = reader.string();
                    break;
                }
            case 2: {
                    message.commitHash = reader.string();
                    break;
                }
            case 3: {
                    message.hasUncommittedChanges = reader.bool();
                    break;
                }
            case 4: {
                    message.remoteUrl = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GitInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GitInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GitInfo} GitInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GitInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GitInfo message.
     * @function verify
     * @memberof GitInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GitInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.branch != null && message.hasOwnProperty("branch"))
            if (!$util.isString(message.branch))
                return "branch: string expected";
        if (message.commitHash != null && message.hasOwnProperty("commitHash"))
            if (!$util.isString(message.commitHash))
                return "commitHash: string expected";
        if (message.hasUncommittedChanges != null && message.hasOwnProperty("hasUncommittedChanges"))
            if (typeof message.hasUncommittedChanges !== "boolean")
                return "hasUncommittedChanges: boolean expected";
        if (message.remoteUrl != null && message.hasOwnProperty("remoteUrl"))
            if (!$util.isString(message.remoteUrl))
                return "remoteUrl: string expected";
        return null;
    };

    /**
     * Creates a GitInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GitInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GitInfo} GitInfo
     */
    GitInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.GitInfo)
            return object;
        var message = new $root.GitInfo();
        if (object.branch != null)
            message.branch = String(object.branch);
        if (object.commitHash != null)
            message.commitHash = String(object.commitHash);
        if (object.hasUncommittedChanges != null)
            message.hasUncommittedChanges = Boolean(object.hasUncommittedChanges);
        if (object.remoteUrl != null)
            message.remoteUrl = String(object.remoteUrl);
        return message;
    };

    /**
     * Creates a plain object from a GitInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GitInfo
     * @static
     * @param {GitInfo} message GitInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GitInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.branch = "";
            object.commitHash = "";
            object.hasUncommittedChanges = false;
            object.remoteUrl = "";
        }
        if (message.branch != null && message.hasOwnProperty("branch"))
            object.branch = message.branch;
        if (message.commitHash != null && message.hasOwnProperty("commitHash"))
            object.commitHash = message.commitHash;
        if (message.hasUncommittedChanges != null && message.hasOwnProperty("hasUncommittedChanges"))
            object.hasUncommittedChanges = message.hasUncommittedChanges;
        if (message.remoteUrl != null && message.hasOwnProperty("remoteUrl"))
            object.remoteUrl = message.remoteUrl;
        return object;
    };

    /**
     * Converts this GitInfo to JSON.
     * @function toJSON
     * @memberof GitInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GitInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GitInfo
     * @function getTypeUrl
     * @memberof GitInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GitInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GitInfo";
    };

    return GitInfo;
})();

$root.MaxModeSettings = (function() {

    /**
     * Properties of a MaxModeSettings.
     * @exports IMaxModeSettings
     * @interface IMaxModeSettings
     * @property {boolean|null} [enabled] MaxModeSettings enabled
     * @property {IAgentCapabilities|null} [agentCaps] MaxModeSettings agentCaps
     * @property {IThinkingConfiguration|null} [thinkingConfig] MaxModeSettings thinkingConfig
     * @property {IContextConfiguration|null} [contextConfig] MaxModeSettings contextConfig
     * @property {IToolConfiguration|null} [toolConfig] MaxModeSettings toolConfig
     */

    /**
     * Constructs a new MaxModeSettings.
     * @exports MaxModeSettings
     * @classdesc Represents a MaxModeSettings.
     * @implements IMaxModeSettings
     * @constructor
     * @param {IMaxModeSettings=} [properties] Properties to set
     */
    function MaxModeSettings(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MaxModeSettings enabled.
     * @member {boolean} enabled
     * @memberof MaxModeSettings
     * @instance
     */
    MaxModeSettings.prototype.enabled = false;

    /**
     * MaxModeSettings agentCaps.
     * @member {IAgentCapabilities|null|undefined} agentCaps
     * @memberof MaxModeSettings
     * @instance
     */
    MaxModeSettings.prototype.agentCaps = null;

    /**
     * MaxModeSettings thinkingConfig.
     * @member {IThinkingConfiguration|null|undefined} thinkingConfig
     * @memberof MaxModeSettings
     * @instance
     */
    MaxModeSettings.prototype.thinkingConfig = null;

    /**
     * MaxModeSettings contextConfig.
     * @member {IContextConfiguration|null|undefined} contextConfig
     * @memberof MaxModeSettings
     * @instance
     */
    MaxModeSettings.prototype.contextConfig = null;

    /**
     * MaxModeSettings toolConfig.
     * @member {IToolConfiguration|null|undefined} toolConfig
     * @memberof MaxModeSettings
     * @instance
     */
    MaxModeSettings.prototype.toolConfig = null;

    /**
     * Creates a new MaxModeSettings instance using the specified properties.
     * @function create
     * @memberof MaxModeSettings
     * @static
     * @param {IMaxModeSettings=} [properties] Properties to set
     * @returns {MaxModeSettings} MaxModeSettings instance
     */
    MaxModeSettings.create = function create(properties) {
        return new MaxModeSettings(properties);
    };

    /**
     * Encodes the specified MaxModeSettings message. Does not implicitly {@link MaxModeSettings.verify|verify} messages.
     * @function encode
     * @memberof MaxModeSettings
     * @static
     * @param {IMaxModeSettings} message MaxModeSettings message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MaxModeSettings.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enabled);
        if (message.agentCaps != null && Object.hasOwnProperty.call(message, "agentCaps"))
            $root.AgentCapabilities.encode(message.agentCaps, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.thinkingConfig != null && Object.hasOwnProperty.call(message, "thinkingConfig"))
            $root.ThinkingConfiguration.encode(message.thinkingConfig, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.contextConfig != null && Object.hasOwnProperty.call(message, "contextConfig"))
            $root.ContextConfiguration.encode(message.contextConfig, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.toolConfig != null && Object.hasOwnProperty.call(message, "toolConfig"))
            $root.ToolConfiguration.encode(message.toolConfig, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MaxModeSettings message, length delimited. Does not implicitly {@link MaxModeSettings.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MaxModeSettings
     * @static
     * @param {IMaxModeSettings} message MaxModeSettings message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MaxModeSettings.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MaxModeSettings message from the specified reader or buffer.
     * @function decode
     * @memberof MaxModeSettings
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MaxModeSettings} MaxModeSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MaxModeSettings.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MaxModeSettings();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.enabled = reader.bool();
                    break;
                }
            case 2: {
                    message.agentCaps = $root.AgentCapabilities.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.thinkingConfig = $root.ThinkingConfiguration.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.contextConfig = $root.ContextConfiguration.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.toolConfig = $root.ToolConfiguration.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MaxModeSettings message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MaxModeSettings
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MaxModeSettings} MaxModeSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MaxModeSettings.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MaxModeSettings message.
     * @function verify
     * @memberof MaxModeSettings
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MaxModeSettings.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.enabled != null && message.hasOwnProperty("enabled"))
            if (typeof message.enabled !== "boolean")
                return "enabled: boolean expected";
        if (message.agentCaps != null && message.hasOwnProperty("agentCaps")) {
            var error = $root.AgentCapabilities.verify(message.agentCaps);
            if (error)
                return "agentCaps." + error;
        }
        if (message.thinkingConfig != null && message.hasOwnProperty("thinkingConfig")) {
            var error = $root.ThinkingConfiguration.verify(message.thinkingConfig);
            if (error)
                return "thinkingConfig." + error;
        }
        if (message.contextConfig != null && message.hasOwnProperty("contextConfig")) {
            var error = $root.ContextConfiguration.verify(message.contextConfig);
            if (error)
                return "contextConfig." + error;
        }
        if (message.toolConfig != null && message.hasOwnProperty("toolConfig")) {
            var error = $root.ToolConfiguration.verify(message.toolConfig);
            if (error)
                return "toolConfig." + error;
        }
        return null;
    };

    /**
     * Creates a MaxModeSettings message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MaxModeSettings
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MaxModeSettings} MaxModeSettings
     */
    MaxModeSettings.fromObject = function fromObject(object) {
        if (object instanceof $root.MaxModeSettings)
            return object;
        var message = new $root.MaxModeSettings();
        if (object.enabled != null)
            message.enabled = Boolean(object.enabled);
        if (object.agentCaps != null) {
            if (typeof object.agentCaps !== "object")
                throw TypeError(".MaxModeSettings.agentCaps: object expected");
            message.agentCaps = $root.AgentCapabilities.fromObject(object.agentCaps);
        }
        if (object.thinkingConfig != null) {
            if (typeof object.thinkingConfig !== "object")
                throw TypeError(".MaxModeSettings.thinkingConfig: object expected");
            message.thinkingConfig = $root.ThinkingConfiguration.fromObject(object.thinkingConfig);
        }
        if (object.contextConfig != null) {
            if (typeof object.contextConfig !== "object")
                throw TypeError(".MaxModeSettings.contextConfig: object expected");
            message.contextConfig = $root.ContextConfiguration.fromObject(object.contextConfig);
        }
        if (object.toolConfig != null) {
            if (typeof object.toolConfig !== "object")
                throw TypeError(".MaxModeSettings.toolConfig: object expected");
            message.toolConfig = $root.ToolConfiguration.fromObject(object.toolConfig);
        }
        return message;
    };

    /**
     * Creates a plain object from a MaxModeSettings message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MaxModeSettings
     * @static
     * @param {MaxModeSettings} message MaxModeSettings
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MaxModeSettings.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.enabled = false;
            object.agentCaps = null;
            object.thinkingConfig = null;
            object.contextConfig = null;
            object.toolConfig = null;
        }
        if (message.enabled != null && message.hasOwnProperty("enabled"))
            object.enabled = message.enabled;
        if (message.agentCaps != null && message.hasOwnProperty("agentCaps"))
            object.agentCaps = $root.AgentCapabilities.toObject(message.agentCaps, options);
        if (message.thinkingConfig != null && message.hasOwnProperty("thinkingConfig"))
            object.thinkingConfig = $root.ThinkingConfiguration.toObject(message.thinkingConfig, options);
        if (message.contextConfig != null && message.hasOwnProperty("contextConfig"))
            object.contextConfig = $root.ContextConfiguration.toObject(message.contextConfig, options);
        if (message.toolConfig != null && message.hasOwnProperty("toolConfig"))
            object.toolConfig = $root.ToolConfiguration.toObject(message.toolConfig, options);
        return object;
    };

    /**
     * Converts this MaxModeSettings to JSON.
     * @function toJSON
     * @memberof MaxModeSettings
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MaxModeSettings.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MaxModeSettings
     * @function getTypeUrl
     * @memberof MaxModeSettings
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MaxModeSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MaxModeSettings";
    };

    return MaxModeSettings;
})();

$root.AgentCapabilities = (function() {

    /**
     * Properties of an AgentCapabilities.
     * @exports IAgentCapabilities
     * @interface IAgentCapabilities
     * @property {boolean|null} [codeUnderstanding] AgentCapabilities codeUnderstanding
     * @property {boolean|null} [codeGeneration] AgentCapabilities codeGeneration
     * @property {boolean|null} [codeRefactoring] AgentCapabilities codeRefactoring
     * @property {boolean|null} [fileReading] AgentCapabilities fileReading
     * @property {boolean|null} [fileWriting] AgentCapabilities fileWriting
     * @property {boolean|null} [fileSearch] AgentCapabilities fileSearch
     * @property {boolean|null} [projectAnalysis] AgentCapabilities projectAnalysis
     * @property {boolean|null} [dependencyAnalysis] AgentCapabilities dependencyAnalysis
     * @property {boolean|null} [architectureAnalysis] AgentCapabilities architectureAnalysis
     * @property {boolean|null} [debuggingAssistance] AgentCapabilities debuggingAssistance
     * @property {boolean|null} [testGeneration] AgentCapabilities testGeneration
     * @property {boolean|null} [errorAnalysis] AgentCapabilities errorAnalysis
     * @property {boolean|null} [documentationGeneration] AgentCapabilities documentationGeneration
     * @property {boolean|null} [commentGeneration] AgentCapabilities commentGeneration
     * @property {boolean|null} [performanceOptimization] AgentCapabilities performanceOptimization
     * @property {boolean|null} [securityAnalysis] AgentCapabilities securityAnalysis
     */

    /**
     * Constructs a new AgentCapabilities.
     * @exports AgentCapabilities
     * @classdesc Represents an AgentCapabilities.
     * @implements IAgentCapabilities
     * @constructor
     * @param {IAgentCapabilities=} [properties] Properties to set
     */
    function AgentCapabilities(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AgentCapabilities codeUnderstanding.
     * @member {boolean} codeUnderstanding
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.codeUnderstanding = false;

    /**
     * AgentCapabilities codeGeneration.
     * @member {boolean} codeGeneration
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.codeGeneration = false;

    /**
     * AgentCapabilities codeRefactoring.
     * @member {boolean} codeRefactoring
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.codeRefactoring = false;

    /**
     * AgentCapabilities fileReading.
     * @member {boolean} fileReading
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.fileReading = false;

    /**
     * AgentCapabilities fileWriting.
     * @member {boolean} fileWriting
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.fileWriting = false;

    /**
     * AgentCapabilities fileSearch.
     * @member {boolean} fileSearch
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.fileSearch = false;

    /**
     * AgentCapabilities projectAnalysis.
     * @member {boolean} projectAnalysis
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.projectAnalysis = false;

    /**
     * AgentCapabilities dependencyAnalysis.
     * @member {boolean} dependencyAnalysis
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.dependencyAnalysis = false;

    /**
     * AgentCapabilities architectureAnalysis.
     * @member {boolean} architectureAnalysis
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.architectureAnalysis = false;

    /**
     * AgentCapabilities debuggingAssistance.
     * @member {boolean} debuggingAssistance
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.debuggingAssistance = false;

    /**
     * AgentCapabilities testGeneration.
     * @member {boolean} testGeneration
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.testGeneration = false;

    /**
     * AgentCapabilities errorAnalysis.
     * @member {boolean} errorAnalysis
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.errorAnalysis = false;

    /**
     * AgentCapabilities documentationGeneration.
     * @member {boolean} documentationGeneration
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.documentationGeneration = false;

    /**
     * AgentCapabilities commentGeneration.
     * @member {boolean} commentGeneration
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.commentGeneration = false;

    /**
     * AgentCapabilities performanceOptimization.
     * @member {boolean} performanceOptimization
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.performanceOptimization = false;

    /**
     * AgentCapabilities securityAnalysis.
     * @member {boolean} securityAnalysis
     * @memberof AgentCapabilities
     * @instance
     */
    AgentCapabilities.prototype.securityAnalysis = false;

    /**
     * Creates a new AgentCapabilities instance using the specified properties.
     * @function create
     * @memberof AgentCapabilities
     * @static
     * @param {IAgentCapabilities=} [properties] Properties to set
     * @returns {AgentCapabilities} AgentCapabilities instance
     */
    AgentCapabilities.create = function create(properties) {
        return new AgentCapabilities(properties);
    };

    /**
     * Encodes the specified AgentCapabilities message. Does not implicitly {@link AgentCapabilities.verify|verify} messages.
     * @function encode
     * @memberof AgentCapabilities
     * @static
     * @param {IAgentCapabilities} message AgentCapabilities message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AgentCapabilities.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.codeUnderstanding != null && Object.hasOwnProperty.call(message, "codeUnderstanding"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.codeUnderstanding);
        if (message.codeGeneration != null && Object.hasOwnProperty.call(message, "codeGeneration"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.codeGeneration);
        if (message.codeRefactoring != null && Object.hasOwnProperty.call(message, "codeRefactoring"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.codeRefactoring);
        if (message.fileReading != null && Object.hasOwnProperty.call(message, "fileReading"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.fileReading);
        if (message.fileWriting != null && Object.hasOwnProperty.call(message, "fileWriting"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.fileWriting);
        if (message.fileSearch != null && Object.hasOwnProperty.call(message, "fileSearch"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.fileSearch);
        if (message.projectAnalysis != null && Object.hasOwnProperty.call(message, "projectAnalysis"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.projectAnalysis);
        if (message.dependencyAnalysis != null && Object.hasOwnProperty.call(message, "dependencyAnalysis"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.dependencyAnalysis);
        if (message.architectureAnalysis != null && Object.hasOwnProperty.call(message, "architectureAnalysis"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.architectureAnalysis);
        if (message.debuggingAssistance != null && Object.hasOwnProperty.call(message, "debuggingAssistance"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.debuggingAssistance);
        if (message.testGeneration != null && Object.hasOwnProperty.call(message, "testGeneration"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.testGeneration);
        if (message.errorAnalysis != null && Object.hasOwnProperty.call(message, "errorAnalysis"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.errorAnalysis);
        if (message.documentationGeneration != null && Object.hasOwnProperty.call(message, "documentationGeneration"))
            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.documentationGeneration);
        if (message.commentGeneration != null && Object.hasOwnProperty.call(message, "commentGeneration"))
            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.commentGeneration);
        if (message.performanceOptimization != null && Object.hasOwnProperty.call(message, "performanceOptimization"))
            writer.uint32(/* id 15, wireType 0 =*/120).bool(message.performanceOptimization);
        if (message.securityAnalysis != null && Object.hasOwnProperty.call(message, "securityAnalysis"))
            writer.uint32(/* id 16, wireType 0 =*/128).bool(message.securityAnalysis);
        return writer;
    };

    /**
     * Encodes the specified AgentCapabilities message, length delimited. Does not implicitly {@link AgentCapabilities.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AgentCapabilities
     * @static
     * @param {IAgentCapabilities} message AgentCapabilities message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AgentCapabilities.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AgentCapabilities message from the specified reader or buffer.
     * @function decode
     * @memberof AgentCapabilities
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AgentCapabilities} AgentCapabilities
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AgentCapabilities.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AgentCapabilities();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.codeUnderstanding = reader.bool();
                    break;
                }
            case 2: {
                    message.codeGeneration = reader.bool();
                    break;
                }
            case 3: {
                    message.codeRefactoring = reader.bool();
                    break;
                }
            case 4: {
                    message.fileReading = reader.bool();
                    break;
                }
            case 5: {
                    message.fileWriting = reader.bool();
                    break;
                }
            case 6: {
                    message.fileSearch = reader.bool();
                    break;
                }
            case 7: {
                    message.projectAnalysis = reader.bool();
                    break;
                }
            case 8: {
                    message.dependencyAnalysis = reader.bool();
                    break;
                }
            case 9: {
                    message.architectureAnalysis = reader.bool();
                    break;
                }
            case 10: {
                    message.debuggingAssistance = reader.bool();
                    break;
                }
            case 11: {
                    message.testGeneration = reader.bool();
                    break;
                }
            case 12: {
                    message.errorAnalysis = reader.bool();
                    break;
                }
            case 13: {
                    message.documentationGeneration = reader.bool();
                    break;
                }
            case 14: {
                    message.commentGeneration = reader.bool();
                    break;
                }
            case 15: {
                    message.performanceOptimization = reader.bool();
                    break;
                }
            case 16: {
                    message.securityAnalysis = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AgentCapabilities message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AgentCapabilities
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AgentCapabilities} AgentCapabilities
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AgentCapabilities.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AgentCapabilities message.
     * @function verify
     * @memberof AgentCapabilities
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AgentCapabilities.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.codeUnderstanding != null && message.hasOwnProperty("codeUnderstanding"))
            if (typeof message.codeUnderstanding !== "boolean")
                return "codeUnderstanding: boolean expected";
        if (message.codeGeneration != null && message.hasOwnProperty("codeGeneration"))
            if (typeof message.codeGeneration !== "boolean")
                return "codeGeneration: boolean expected";
        if (message.codeRefactoring != null && message.hasOwnProperty("codeRefactoring"))
            if (typeof message.codeRefactoring !== "boolean")
                return "codeRefactoring: boolean expected";
        if (message.fileReading != null && message.hasOwnProperty("fileReading"))
            if (typeof message.fileReading !== "boolean")
                return "fileReading: boolean expected";
        if (message.fileWriting != null && message.hasOwnProperty("fileWriting"))
            if (typeof message.fileWriting !== "boolean")
                return "fileWriting: boolean expected";
        if (message.fileSearch != null && message.hasOwnProperty("fileSearch"))
            if (typeof message.fileSearch !== "boolean")
                return "fileSearch: boolean expected";
        if (message.projectAnalysis != null && message.hasOwnProperty("projectAnalysis"))
            if (typeof message.projectAnalysis !== "boolean")
                return "projectAnalysis: boolean expected";
        if (message.dependencyAnalysis != null && message.hasOwnProperty("dependencyAnalysis"))
            if (typeof message.dependencyAnalysis !== "boolean")
                return "dependencyAnalysis: boolean expected";
        if (message.architectureAnalysis != null && message.hasOwnProperty("architectureAnalysis"))
            if (typeof message.architectureAnalysis !== "boolean")
                return "architectureAnalysis: boolean expected";
        if (message.debuggingAssistance != null && message.hasOwnProperty("debuggingAssistance"))
            if (typeof message.debuggingAssistance !== "boolean")
                return "debuggingAssistance: boolean expected";
        if (message.testGeneration != null && message.hasOwnProperty("testGeneration"))
            if (typeof message.testGeneration !== "boolean")
                return "testGeneration: boolean expected";
        if (message.errorAnalysis != null && message.hasOwnProperty("errorAnalysis"))
            if (typeof message.errorAnalysis !== "boolean")
                return "errorAnalysis: boolean expected";
        if (message.documentationGeneration != null && message.hasOwnProperty("documentationGeneration"))
            if (typeof message.documentationGeneration !== "boolean")
                return "documentationGeneration: boolean expected";
        if (message.commentGeneration != null && message.hasOwnProperty("commentGeneration"))
            if (typeof message.commentGeneration !== "boolean")
                return "commentGeneration: boolean expected";
        if (message.performanceOptimization != null && message.hasOwnProperty("performanceOptimization"))
            if (typeof message.performanceOptimization !== "boolean")
                return "performanceOptimization: boolean expected";
        if (message.securityAnalysis != null && message.hasOwnProperty("securityAnalysis"))
            if (typeof message.securityAnalysis !== "boolean")
                return "securityAnalysis: boolean expected";
        return null;
    };

    /**
     * Creates an AgentCapabilities message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AgentCapabilities
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AgentCapabilities} AgentCapabilities
     */
    AgentCapabilities.fromObject = function fromObject(object) {
        if (object instanceof $root.AgentCapabilities)
            return object;
        var message = new $root.AgentCapabilities();
        if (object.codeUnderstanding != null)
            message.codeUnderstanding = Boolean(object.codeUnderstanding);
        if (object.codeGeneration != null)
            message.codeGeneration = Boolean(object.codeGeneration);
        if (object.codeRefactoring != null)
            message.codeRefactoring = Boolean(object.codeRefactoring);
        if (object.fileReading != null)
            message.fileReading = Boolean(object.fileReading);
        if (object.fileWriting != null)
            message.fileWriting = Boolean(object.fileWriting);
        if (object.fileSearch != null)
            message.fileSearch = Boolean(object.fileSearch);
        if (object.projectAnalysis != null)
            message.projectAnalysis = Boolean(object.projectAnalysis);
        if (object.dependencyAnalysis != null)
            message.dependencyAnalysis = Boolean(object.dependencyAnalysis);
        if (object.architectureAnalysis != null)
            message.architectureAnalysis = Boolean(object.architectureAnalysis);
        if (object.debuggingAssistance != null)
            message.debuggingAssistance = Boolean(object.debuggingAssistance);
        if (object.testGeneration != null)
            message.testGeneration = Boolean(object.testGeneration);
        if (object.errorAnalysis != null)
            message.errorAnalysis = Boolean(object.errorAnalysis);
        if (object.documentationGeneration != null)
            message.documentationGeneration = Boolean(object.documentationGeneration);
        if (object.commentGeneration != null)
            message.commentGeneration = Boolean(object.commentGeneration);
        if (object.performanceOptimization != null)
            message.performanceOptimization = Boolean(object.performanceOptimization);
        if (object.securityAnalysis != null)
            message.securityAnalysis = Boolean(object.securityAnalysis);
        return message;
    };

    /**
     * Creates a plain object from an AgentCapabilities message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AgentCapabilities
     * @static
     * @param {AgentCapabilities} message AgentCapabilities
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AgentCapabilities.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.codeUnderstanding = false;
            object.codeGeneration = false;
            object.codeRefactoring = false;
            object.fileReading = false;
            object.fileWriting = false;
            object.fileSearch = false;
            object.projectAnalysis = false;
            object.dependencyAnalysis = false;
            object.architectureAnalysis = false;
            object.debuggingAssistance = false;
            object.testGeneration = false;
            object.errorAnalysis = false;
            object.documentationGeneration = false;
            object.commentGeneration = false;
            object.performanceOptimization = false;
            object.securityAnalysis = false;
        }
        if (message.codeUnderstanding != null && message.hasOwnProperty("codeUnderstanding"))
            object.codeUnderstanding = message.codeUnderstanding;
        if (message.codeGeneration != null && message.hasOwnProperty("codeGeneration"))
            object.codeGeneration = message.codeGeneration;
        if (message.codeRefactoring != null && message.hasOwnProperty("codeRefactoring"))
            object.codeRefactoring = message.codeRefactoring;
        if (message.fileReading != null && message.hasOwnProperty("fileReading"))
            object.fileReading = message.fileReading;
        if (message.fileWriting != null && message.hasOwnProperty("fileWriting"))
            object.fileWriting = message.fileWriting;
        if (message.fileSearch != null && message.hasOwnProperty("fileSearch"))
            object.fileSearch = message.fileSearch;
        if (message.projectAnalysis != null && message.hasOwnProperty("projectAnalysis"))
            object.projectAnalysis = message.projectAnalysis;
        if (message.dependencyAnalysis != null && message.hasOwnProperty("dependencyAnalysis"))
            object.dependencyAnalysis = message.dependencyAnalysis;
        if (message.architectureAnalysis != null && message.hasOwnProperty("architectureAnalysis"))
            object.architectureAnalysis = message.architectureAnalysis;
        if (message.debuggingAssistance != null && message.hasOwnProperty("debuggingAssistance"))
            object.debuggingAssistance = message.debuggingAssistance;
        if (message.testGeneration != null && message.hasOwnProperty("testGeneration"))
            object.testGeneration = message.testGeneration;
        if (message.errorAnalysis != null && message.hasOwnProperty("errorAnalysis"))
            object.errorAnalysis = message.errorAnalysis;
        if (message.documentationGeneration != null && message.hasOwnProperty("documentationGeneration"))
            object.documentationGeneration = message.documentationGeneration;
        if (message.commentGeneration != null && message.hasOwnProperty("commentGeneration"))
            object.commentGeneration = message.commentGeneration;
        if (message.performanceOptimization != null && message.hasOwnProperty("performanceOptimization"))
            object.performanceOptimization = message.performanceOptimization;
        if (message.securityAnalysis != null && message.hasOwnProperty("securityAnalysis"))
            object.securityAnalysis = message.securityAnalysis;
        return object;
    };

    /**
     * Converts this AgentCapabilities to JSON.
     * @function toJSON
     * @memberof AgentCapabilities
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AgentCapabilities.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AgentCapabilities
     * @function getTypeUrl
     * @memberof AgentCapabilities
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AgentCapabilities.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AgentCapabilities";
    };

    return AgentCapabilities;
})();

$root.ThinkingConfiguration = (function() {

    /**
     * Properties of a ThinkingConfiguration.
     * @exports IThinkingConfiguration
     * @interface IThinkingConfiguration
     * @property {number|null} [depthLevel] ThinkingConfiguration depthLevel
     * @property {boolean|null} [showThinking] ThinkingConfiguration showThinking
     * @property {boolean|null} [stepByStep] ThinkingConfiguration stepByStep
     * @property {boolean|null} [reasoningChains] ThinkingConfiguration reasoningChains
     * @property {boolean|null} [selfVerification] ThinkingConfiguration selfVerification
     * @property {boolean|null} [alternativeApproaches] ThinkingConfiguration alternativeApproaches
     */

    /**
     * Constructs a new ThinkingConfiguration.
     * @exports ThinkingConfiguration
     * @classdesc Represents a ThinkingConfiguration.
     * @implements IThinkingConfiguration
     * @constructor
     * @param {IThinkingConfiguration=} [properties] Properties to set
     */
    function ThinkingConfiguration(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ThinkingConfiguration depthLevel.
     * @member {number} depthLevel
     * @memberof ThinkingConfiguration
     * @instance
     */
    ThinkingConfiguration.prototype.depthLevel = 0;

    /**
     * ThinkingConfiguration showThinking.
     * @member {boolean} showThinking
     * @memberof ThinkingConfiguration
     * @instance
     */
    ThinkingConfiguration.prototype.showThinking = false;

    /**
     * ThinkingConfiguration stepByStep.
     * @member {boolean} stepByStep
     * @memberof ThinkingConfiguration
     * @instance
     */
    ThinkingConfiguration.prototype.stepByStep = false;

    /**
     * ThinkingConfiguration reasoningChains.
     * @member {boolean} reasoningChains
     * @memberof ThinkingConfiguration
     * @instance
     */
    ThinkingConfiguration.prototype.reasoningChains = false;

    /**
     * ThinkingConfiguration selfVerification.
     * @member {boolean} selfVerification
     * @memberof ThinkingConfiguration
     * @instance
     */
    ThinkingConfiguration.prototype.selfVerification = false;

    /**
     * ThinkingConfiguration alternativeApproaches.
     * @member {boolean} alternativeApproaches
     * @memberof ThinkingConfiguration
     * @instance
     */
    ThinkingConfiguration.prototype.alternativeApproaches = false;

    /**
     * Creates a new ThinkingConfiguration instance using the specified properties.
     * @function create
     * @memberof ThinkingConfiguration
     * @static
     * @param {IThinkingConfiguration=} [properties] Properties to set
     * @returns {ThinkingConfiguration} ThinkingConfiguration instance
     */
    ThinkingConfiguration.create = function create(properties) {
        return new ThinkingConfiguration(properties);
    };

    /**
     * Encodes the specified ThinkingConfiguration message. Does not implicitly {@link ThinkingConfiguration.verify|verify} messages.
     * @function encode
     * @memberof ThinkingConfiguration
     * @static
     * @param {IThinkingConfiguration} message ThinkingConfiguration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThinkingConfiguration.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.depthLevel != null && Object.hasOwnProperty.call(message, "depthLevel"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.depthLevel);
        if (message.showThinking != null && Object.hasOwnProperty.call(message, "showThinking"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.showThinking);
        if (message.stepByStep != null && Object.hasOwnProperty.call(message, "stepByStep"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.stepByStep);
        if (message.reasoningChains != null && Object.hasOwnProperty.call(message, "reasoningChains"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.reasoningChains);
        if (message.selfVerification != null && Object.hasOwnProperty.call(message, "selfVerification"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.selfVerification);
        if (message.alternativeApproaches != null && Object.hasOwnProperty.call(message, "alternativeApproaches"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.alternativeApproaches);
        return writer;
    };

    /**
     * Encodes the specified ThinkingConfiguration message, length delimited. Does not implicitly {@link ThinkingConfiguration.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ThinkingConfiguration
     * @static
     * @param {IThinkingConfiguration} message ThinkingConfiguration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThinkingConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ThinkingConfiguration message from the specified reader or buffer.
     * @function decode
     * @memberof ThinkingConfiguration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ThinkingConfiguration} ThinkingConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThinkingConfiguration.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThinkingConfiguration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.depthLevel = reader.int32();
                    break;
                }
            case 2: {
                    message.showThinking = reader.bool();
                    break;
                }
            case 3: {
                    message.stepByStep = reader.bool();
                    break;
                }
            case 4: {
                    message.reasoningChains = reader.bool();
                    break;
                }
            case 5: {
                    message.selfVerification = reader.bool();
                    break;
                }
            case 6: {
                    message.alternativeApproaches = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ThinkingConfiguration message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ThinkingConfiguration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ThinkingConfiguration} ThinkingConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThinkingConfiguration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ThinkingConfiguration message.
     * @function verify
     * @memberof ThinkingConfiguration
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ThinkingConfiguration.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.depthLevel != null && message.hasOwnProperty("depthLevel"))
            if (!$util.isInteger(message.depthLevel))
                return "depthLevel: integer expected";
        if (message.showThinking != null && message.hasOwnProperty("showThinking"))
            if (typeof message.showThinking !== "boolean")
                return "showThinking: boolean expected";
        if (message.stepByStep != null && message.hasOwnProperty("stepByStep"))
            if (typeof message.stepByStep !== "boolean")
                return "stepByStep: boolean expected";
        if (message.reasoningChains != null && message.hasOwnProperty("reasoningChains"))
            if (typeof message.reasoningChains !== "boolean")
                return "reasoningChains: boolean expected";
        if (message.selfVerification != null && message.hasOwnProperty("selfVerification"))
            if (typeof message.selfVerification !== "boolean")
                return "selfVerification: boolean expected";
        if (message.alternativeApproaches != null && message.hasOwnProperty("alternativeApproaches"))
            if (typeof message.alternativeApproaches !== "boolean")
                return "alternativeApproaches: boolean expected";
        return null;
    };

    /**
     * Creates a ThinkingConfiguration message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ThinkingConfiguration
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ThinkingConfiguration} ThinkingConfiguration
     */
    ThinkingConfiguration.fromObject = function fromObject(object) {
        if (object instanceof $root.ThinkingConfiguration)
            return object;
        var message = new $root.ThinkingConfiguration();
        if (object.depthLevel != null)
            message.depthLevel = object.depthLevel | 0;
        if (object.showThinking != null)
            message.showThinking = Boolean(object.showThinking);
        if (object.stepByStep != null)
            message.stepByStep = Boolean(object.stepByStep);
        if (object.reasoningChains != null)
            message.reasoningChains = Boolean(object.reasoningChains);
        if (object.selfVerification != null)
            message.selfVerification = Boolean(object.selfVerification);
        if (object.alternativeApproaches != null)
            message.alternativeApproaches = Boolean(object.alternativeApproaches);
        return message;
    };

    /**
     * Creates a plain object from a ThinkingConfiguration message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ThinkingConfiguration
     * @static
     * @param {ThinkingConfiguration} message ThinkingConfiguration
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ThinkingConfiguration.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.depthLevel = 0;
            object.showThinking = false;
            object.stepByStep = false;
            object.reasoningChains = false;
            object.selfVerification = false;
            object.alternativeApproaches = false;
        }
        if (message.depthLevel != null && message.hasOwnProperty("depthLevel"))
            object.depthLevel = message.depthLevel;
        if (message.showThinking != null && message.hasOwnProperty("showThinking"))
            object.showThinking = message.showThinking;
        if (message.stepByStep != null && message.hasOwnProperty("stepByStep"))
            object.stepByStep = message.stepByStep;
        if (message.reasoningChains != null && message.hasOwnProperty("reasoningChains"))
            object.reasoningChains = message.reasoningChains;
        if (message.selfVerification != null && message.hasOwnProperty("selfVerification"))
            object.selfVerification = message.selfVerification;
        if (message.alternativeApproaches != null && message.hasOwnProperty("alternativeApproaches"))
            object.alternativeApproaches = message.alternativeApproaches;
        return object;
    };

    /**
     * Converts this ThinkingConfiguration to JSON.
     * @function toJSON
     * @memberof ThinkingConfiguration
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ThinkingConfiguration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ThinkingConfiguration
     * @function getTypeUrl
     * @memberof ThinkingConfiguration
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ThinkingConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ThinkingConfiguration";
    };

    return ThinkingConfiguration;
})();

$root.ContextConfiguration = (function() {

    /**
     * Properties of a ContextConfiguration.
     * @exports IContextConfiguration
     * @interface IContextConfiguration
     * @property {number|null} [maxContextTokens] ContextConfiguration maxContextTokens
     * @property {number|null} [maxFiles] ContextConfiguration maxFiles
     * @property {number|null} [maxFileSize] ContextConfiguration maxFileSize
     * @property {number|null} [conversationHistory] ContextConfiguration conversationHistory
     * @property {boolean|null} [includeEditHistory] ContextConfiguration includeEditHistory
     * @property {boolean|null} [includeProjectStructure] ContextConfiguration includeProjectStructure
     * @property {boolean|null} [includeDependencies] ContextConfiguration includeDependencies
     */

    /**
     * Constructs a new ContextConfiguration.
     * @exports ContextConfiguration
     * @classdesc Represents a ContextConfiguration.
     * @implements IContextConfiguration
     * @constructor
     * @param {IContextConfiguration=} [properties] Properties to set
     */
    function ContextConfiguration(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContextConfiguration maxContextTokens.
     * @member {number} maxContextTokens
     * @memberof ContextConfiguration
     * @instance
     */
    ContextConfiguration.prototype.maxContextTokens = 0;

    /**
     * ContextConfiguration maxFiles.
     * @member {number} maxFiles
     * @memberof ContextConfiguration
     * @instance
     */
    ContextConfiguration.prototype.maxFiles = 0;

    /**
     * ContextConfiguration maxFileSize.
     * @member {number} maxFileSize
     * @memberof ContextConfiguration
     * @instance
     */
    ContextConfiguration.prototype.maxFileSize = 0;

    /**
     * ContextConfiguration conversationHistory.
     * @member {number} conversationHistory
     * @memberof ContextConfiguration
     * @instance
     */
    ContextConfiguration.prototype.conversationHistory = 0;

    /**
     * ContextConfiguration includeEditHistory.
     * @member {boolean} includeEditHistory
     * @memberof ContextConfiguration
     * @instance
     */
    ContextConfiguration.prototype.includeEditHistory = false;

    /**
     * ContextConfiguration includeProjectStructure.
     * @member {boolean} includeProjectStructure
     * @memberof ContextConfiguration
     * @instance
     */
    ContextConfiguration.prototype.includeProjectStructure = false;

    /**
     * ContextConfiguration includeDependencies.
     * @member {boolean} includeDependencies
     * @memberof ContextConfiguration
     * @instance
     */
    ContextConfiguration.prototype.includeDependencies = false;

    /**
     * Creates a new ContextConfiguration instance using the specified properties.
     * @function create
     * @memberof ContextConfiguration
     * @static
     * @param {IContextConfiguration=} [properties] Properties to set
     * @returns {ContextConfiguration} ContextConfiguration instance
     */
    ContextConfiguration.create = function create(properties) {
        return new ContextConfiguration(properties);
    };

    /**
     * Encodes the specified ContextConfiguration message. Does not implicitly {@link ContextConfiguration.verify|verify} messages.
     * @function encode
     * @memberof ContextConfiguration
     * @static
     * @param {IContextConfiguration} message ContextConfiguration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContextConfiguration.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.maxContextTokens != null && Object.hasOwnProperty.call(message, "maxContextTokens"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.maxContextTokens);
        if (message.maxFiles != null && Object.hasOwnProperty.call(message, "maxFiles"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxFiles);
        if (message.maxFileSize != null && Object.hasOwnProperty.call(message, "maxFileSize"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxFileSize);
        if (message.conversationHistory != null && Object.hasOwnProperty.call(message, "conversationHistory"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.conversationHistory);
        if (message.includeEditHistory != null && Object.hasOwnProperty.call(message, "includeEditHistory"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.includeEditHistory);
        if (message.includeProjectStructure != null && Object.hasOwnProperty.call(message, "includeProjectStructure"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.includeProjectStructure);
        if (message.includeDependencies != null && Object.hasOwnProperty.call(message, "includeDependencies"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.includeDependencies);
        return writer;
    };

    /**
     * Encodes the specified ContextConfiguration message, length delimited. Does not implicitly {@link ContextConfiguration.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ContextConfiguration
     * @static
     * @param {IContextConfiguration} message ContextConfiguration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContextConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ContextConfiguration message from the specified reader or buffer.
     * @function decode
     * @memberof ContextConfiguration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContextConfiguration} ContextConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContextConfiguration.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContextConfiguration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.maxContextTokens = reader.int32();
                    break;
                }
            case 2: {
                    message.maxFiles = reader.int32();
                    break;
                }
            case 3: {
                    message.maxFileSize = reader.int32();
                    break;
                }
            case 4: {
                    message.conversationHistory = reader.int32();
                    break;
                }
            case 5: {
                    message.includeEditHistory = reader.bool();
                    break;
                }
            case 6: {
                    message.includeProjectStructure = reader.bool();
                    break;
                }
            case 7: {
                    message.includeDependencies = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ContextConfiguration message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ContextConfiguration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ContextConfiguration} ContextConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContextConfiguration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ContextConfiguration message.
     * @function verify
     * @memberof ContextConfiguration
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ContextConfiguration.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.maxContextTokens != null && message.hasOwnProperty("maxContextTokens"))
            if (!$util.isInteger(message.maxContextTokens))
                return "maxContextTokens: integer expected";
        if (message.maxFiles != null && message.hasOwnProperty("maxFiles"))
            if (!$util.isInteger(message.maxFiles))
                return "maxFiles: integer expected";
        if (message.maxFileSize != null && message.hasOwnProperty("maxFileSize"))
            if (!$util.isInteger(message.maxFileSize))
                return "maxFileSize: integer expected";
        if (message.conversationHistory != null && message.hasOwnProperty("conversationHistory"))
            if (!$util.isInteger(message.conversationHistory))
                return "conversationHistory: integer expected";
        if (message.includeEditHistory != null && message.hasOwnProperty("includeEditHistory"))
            if (typeof message.includeEditHistory !== "boolean")
                return "includeEditHistory: boolean expected";
        if (message.includeProjectStructure != null && message.hasOwnProperty("includeProjectStructure"))
            if (typeof message.includeProjectStructure !== "boolean")
                return "includeProjectStructure: boolean expected";
        if (message.includeDependencies != null && message.hasOwnProperty("includeDependencies"))
            if (typeof message.includeDependencies !== "boolean")
                return "includeDependencies: boolean expected";
        return null;
    };

    /**
     * Creates a ContextConfiguration message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ContextConfiguration
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ContextConfiguration} ContextConfiguration
     */
    ContextConfiguration.fromObject = function fromObject(object) {
        if (object instanceof $root.ContextConfiguration)
            return object;
        var message = new $root.ContextConfiguration();
        if (object.maxContextTokens != null)
            message.maxContextTokens = object.maxContextTokens | 0;
        if (object.maxFiles != null)
            message.maxFiles = object.maxFiles | 0;
        if (object.maxFileSize != null)
            message.maxFileSize = object.maxFileSize | 0;
        if (object.conversationHistory != null)
            message.conversationHistory = object.conversationHistory | 0;
        if (object.includeEditHistory != null)
            message.includeEditHistory = Boolean(object.includeEditHistory);
        if (object.includeProjectStructure != null)
            message.includeProjectStructure = Boolean(object.includeProjectStructure);
        if (object.includeDependencies != null)
            message.includeDependencies = Boolean(object.includeDependencies);
        return message;
    };

    /**
     * Creates a plain object from a ContextConfiguration message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ContextConfiguration
     * @static
     * @param {ContextConfiguration} message ContextConfiguration
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ContextConfiguration.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.maxContextTokens = 0;
            object.maxFiles = 0;
            object.maxFileSize = 0;
            object.conversationHistory = 0;
            object.includeEditHistory = false;
            object.includeProjectStructure = false;
            object.includeDependencies = false;
        }
        if (message.maxContextTokens != null && message.hasOwnProperty("maxContextTokens"))
            object.maxContextTokens = message.maxContextTokens;
        if (message.maxFiles != null && message.hasOwnProperty("maxFiles"))
            object.maxFiles = message.maxFiles;
        if (message.maxFileSize != null && message.hasOwnProperty("maxFileSize"))
            object.maxFileSize = message.maxFileSize;
        if (message.conversationHistory != null && message.hasOwnProperty("conversationHistory"))
            object.conversationHistory = message.conversationHistory;
        if (message.includeEditHistory != null && message.hasOwnProperty("includeEditHistory"))
            object.includeEditHistory = message.includeEditHistory;
        if (message.includeProjectStructure != null && message.hasOwnProperty("includeProjectStructure"))
            object.includeProjectStructure = message.includeProjectStructure;
        if (message.includeDependencies != null && message.hasOwnProperty("includeDependencies"))
            object.includeDependencies = message.includeDependencies;
        return object;
    };

    /**
     * Converts this ContextConfiguration to JSON.
     * @function toJSON
     * @memberof ContextConfiguration
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ContextConfiguration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ContextConfiguration
     * @function getTypeUrl
     * @memberof ContextConfiguration
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ContextConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ContextConfiguration";
    };

    return ContextConfiguration;
})();

$root.ToolConfiguration = (function() {

    /**
     * Properties of a ToolConfiguration.
     * @exports IToolConfiguration
     * @interface IToolConfiguration
     * @property {boolean|null} [webSearchEnabled] ToolConfiguration webSearchEnabled
     * @property {boolean|null} [codeExecutionEnabled] ToolConfiguration codeExecutionEnabled
     * @property {boolean|null} [filesystemAccess] ToolConfiguration filesystemAccess
     * @property {boolean|null} [externalApiCalls] ToolConfiguration externalApiCalls
     * @property {boolean|null} [databaseAccess] ToolConfiguration databaseAccess
     */

    /**
     * Constructs a new ToolConfiguration.
     * @exports ToolConfiguration
     * @classdesc Represents a ToolConfiguration.
     * @implements IToolConfiguration
     * @constructor
     * @param {IToolConfiguration=} [properties] Properties to set
     */
    function ToolConfiguration(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ToolConfiguration webSearchEnabled.
     * @member {boolean} webSearchEnabled
     * @memberof ToolConfiguration
     * @instance
     */
    ToolConfiguration.prototype.webSearchEnabled = false;

    /**
     * ToolConfiguration codeExecutionEnabled.
     * @member {boolean} codeExecutionEnabled
     * @memberof ToolConfiguration
     * @instance
     */
    ToolConfiguration.prototype.codeExecutionEnabled = false;

    /**
     * ToolConfiguration filesystemAccess.
     * @member {boolean} filesystemAccess
     * @memberof ToolConfiguration
     * @instance
     */
    ToolConfiguration.prototype.filesystemAccess = false;

    /**
     * ToolConfiguration externalApiCalls.
     * @member {boolean} externalApiCalls
     * @memberof ToolConfiguration
     * @instance
     */
    ToolConfiguration.prototype.externalApiCalls = false;

    /**
     * ToolConfiguration databaseAccess.
     * @member {boolean} databaseAccess
     * @memberof ToolConfiguration
     * @instance
     */
    ToolConfiguration.prototype.databaseAccess = false;

    /**
     * Creates a new ToolConfiguration instance using the specified properties.
     * @function create
     * @memberof ToolConfiguration
     * @static
     * @param {IToolConfiguration=} [properties] Properties to set
     * @returns {ToolConfiguration} ToolConfiguration instance
     */
    ToolConfiguration.create = function create(properties) {
        return new ToolConfiguration(properties);
    };

    /**
     * Encodes the specified ToolConfiguration message. Does not implicitly {@link ToolConfiguration.verify|verify} messages.
     * @function encode
     * @memberof ToolConfiguration
     * @static
     * @param {IToolConfiguration} message ToolConfiguration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ToolConfiguration.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.webSearchEnabled != null && Object.hasOwnProperty.call(message, "webSearchEnabled"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.webSearchEnabled);
        if (message.codeExecutionEnabled != null && Object.hasOwnProperty.call(message, "codeExecutionEnabled"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.codeExecutionEnabled);
        if (message.filesystemAccess != null && Object.hasOwnProperty.call(message, "filesystemAccess"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.filesystemAccess);
        if (message.externalApiCalls != null && Object.hasOwnProperty.call(message, "externalApiCalls"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.externalApiCalls);
        if (message.databaseAccess != null && Object.hasOwnProperty.call(message, "databaseAccess"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.databaseAccess);
        return writer;
    };

    /**
     * Encodes the specified ToolConfiguration message, length delimited. Does not implicitly {@link ToolConfiguration.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ToolConfiguration
     * @static
     * @param {IToolConfiguration} message ToolConfiguration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ToolConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ToolConfiguration message from the specified reader or buffer.
     * @function decode
     * @memberof ToolConfiguration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ToolConfiguration} ToolConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ToolConfiguration.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ToolConfiguration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.webSearchEnabled = reader.bool();
                    break;
                }
            case 2: {
                    message.codeExecutionEnabled = reader.bool();
                    break;
                }
            case 3: {
                    message.filesystemAccess = reader.bool();
                    break;
                }
            case 4: {
                    message.externalApiCalls = reader.bool();
                    break;
                }
            case 5: {
                    message.databaseAccess = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ToolConfiguration message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ToolConfiguration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ToolConfiguration} ToolConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ToolConfiguration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ToolConfiguration message.
     * @function verify
     * @memberof ToolConfiguration
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ToolConfiguration.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.webSearchEnabled != null && message.hasOwnProperty("webSearchEnabled"))
            if (typeof message.webSearchEnabled !== "boolean")
                return "webSearchEnabled: boolean expected";
        if (message.codeExecutionEnabled != null && message.hasOwnProperty("codeExecutionEnabled"))
            if (typeof message.codeExecutionEnabled !== "boolean")
                return "codeExecutionEnabled: boolean expected";
        if (message.filesystemAccess != null && message.hasOwnProperty("filesystemAccess"))
            if (typeof message.filesystemAccess !== "boolean")
                return "filesystemAccess: boolean expected";
        if (message.externalApiCalls != null && message.hasOwnProperty("externalApiCalls"))
            if (typeof message.externalApiCalls !== "boolean")
                return "externalApiCalls: boolean expected";
        if (message.databaseAccess != null && message.hasOwnProperty("databaseAccess"))
            if (typeof message.databaseAccess !== "boolean")
                return "databaseAccess: boolean expected";
        return null;
    };

    /**
     * Creates a ToolConfiguration message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ToolConfiguration
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ToolConfiguration} ToolConfiguration
     */
    ToolConfiguration.fromObject = function fromObject(object) {
        if (object instanceof $root.ToolConfiguration)
            return object;
        var message = new $root.ToolConfiguration();
        if (object.webSearchEnabled != null)
            message.webSearchEnabled = Boolean(object.webSearchEnabled);
        if (object.codeExecutionEnabled != null)
            message.codeExecutionEnabled = Boolean(object.codeExecutionEnabled);
        if (object.filesystemAccess != null)
            message.filesystemAccess = Boolean(object.filesystemAccess);
        if (object.externalApiCalls != null)
            message.externalApiCalls = Boolean(object.externalApiCalls);
        if (object.databaseAccess != null)
            message.databaseAccess = Boolean(object.databaseAccess);
        return message;
    };

    /**
     * Creates a plain object from a ToolConfiguration message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ToolConfiguration
     * @static
     * @param {ToolConfiguration} message ToolConfiguration
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ToolConfiguration.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.webSearchEnabled = false;
            object.codeExecutionEnabled = false;
            object.filesystemAccess = false;
            object.externalApiCalls = false;
            object.databaseAccess = false;
        }
        if (message.webSearchEnabled != null && message.hasOwnProperty("webSearchEnabled"))
            object.webSearchEnabled = message.webSearchEnabled;
        if (message.codeExecutionEnabled != null && message.hasOwnProperty("codeExecutionEnabled"))
            object.codeExecutionEnabled = message.codeExecutionEnabled;
        if (message.filesystemAccess != null && message.hasOwnProperty("filesystemAccess"))
            object.filesystemAccess = message.filesystemAccess;
        if (message.externalApiCalls != null && message.hasOwnProperty("externalApiCalls"))
            object.externalApiCalls = message.externalApiCalls;
        if (message.databaseAccess != null && message.hasOwnProperty("databaseAccess"))
            object.databaseAccess = message.databaseAccess;
        return object;
    };

    /**
     * Converts this ToolConfiguration to JSON.
     * @function toJSON
     * @memberof ToolConfiguration
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ToolConfiguration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ToolConfiguration
     * @function getTypeUrl
     * @memberof ToolConfiguration
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ToolConfiguration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ToolConfiguration";
    };

    return ToolConfiguration;
})();

$root.MaxModeResponse = (function() {

    /**
     * Properties of a MaxModeResponse.
     * @exports IMaxModeResponse
     * @interface IMaxModeResponse
     * @property {string|null} [thinkingProcess] MaxModeResponse thinkingProcess
     * @property {IAnalysisResult|null} [analysis] MaxModeResponse analysis
     * @property {Array.<IActionSuggestion>|null} [actions] MaxModeResponse actions
     * @property {Array.<ICodeSuggestion>|null} [codeSuggestions] MaxModeResponse codeSuggestions
     * @property {Array.<string>|null} [relevantFiles] MaxModeResponse relevantFiles
     */

    /**
     * Constructs a new MaxModeResponse.
     * @exports MaxModeResponse
     * @classdesc Represents a MaxModeResponse.
     * @implements IMaxModeResponse
     * @constructor
     * @param {IMaxModeResponse=} [properties] Properties to set
     */
    function MaxModeResponse(properties) {
        this.actions = [];
        this.codeSuggestions = [];
        this.relevantFiles = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MaxModeResponse thinkingProcess.
     * @member {string} thinkingProcess
     * @memberof MaxModeResponse
     * @instance
     */
    MaxModeResponse.prototype.thinkingProcess = "";

    /**
     * MaxModeResponse analysis.
     * @member {IAnalysisResult|null|undefined} analysis
     * @memberof MaxModeResponse
     * @instance
     */
    MaxModeResponse.prototype.analysis = null;

    /**
     * MaxModeResponse actions.
     * @member {Array.<IActionSuggestion>} actions
     * @memberof MaxModeResponse
     * @instance
     */
    MaxModeResponse.prototype.actions = $util.emptyArray;

    /**
     * MaxModeResponse codeSuggestions.
     * @member {Array.<ICodeSuggestion>} codeSuggestions
     * @memberof MaxModeResponse
     * @instance
     */
    MaxModeResponse.prototype.codeSuggestions = $util.emptyArray;

    /**
     * MaxModeResponse relevantFiles.
     * @member {Array.<string>} relevantFiles
     * @memberof MaxModeResponse
     * @instance
     */
    MaxModeResponse.prototype.relevantFiles = $util.emptyArray;

    /**
     * Creates a new MaxModeResponse instance using the specified properties.
     * @function create
     * @memberof MaxModeResponse
     * @static
     * @param {IMaxModeResponse=} [properties] Properties to set
     * @returns {MaxModeResponse} MaxModeResponse instance
     */
    MaxModeResponse.create = function create(properties) {
        return new MaxModeResponse(properties);
    };

    /**
     * Encodes the specified MaxModeResponse message. Does not implicitly {@link MaxModeResponse.verify|verify} messages.
     * @function encode
     * @memberof MaxModeResponse
     * @static
     * @param {IMaxModeResponse} message MaxModeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MaxModeResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.thinkingProcess != null && Object.hasOwnProperty.call(message, "thinkingProcess"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.thinkingProcess);
        if (message.analysis != null && Object.hasOwnProperty.call(message, "analysis"))
            $root.AnalysisResult.encode(message.analysis, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.actions != null && message.actions.length)
            for (var i = 0; i < message.actions.length; ++i)
                $root.ActionSuggestion.encode(message.actions[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.codeSuggestions != null && message.codeSuggestions.length)
            for (var i = 0; i < message.codeSuggestions.length; ++i)
                $root.CodeSuggestion.encode(message.codeSuggestions[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.relevantFiles != null && message.relevantFiles.length)
            for (var i = 0; i < message.relevantFiles.length; ++i)
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.relevantFiles[i]);
        return writer;
    };

    /**
     * Encodes the specified MaxModeResponse message, length delimited. Does not implicitly {@link MaxModeResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MaxModeResponse
     * @static
     * @param {IMaxModeResponse} message MaxModeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MaxModeResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MaxModeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MaxModeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MaxModeResponse} MaxModeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MaxModeResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MaxModeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.thinkingProcess = reader.string();
                    break;
                }
            case 2: {
                    message.analysis = $root.AnalysisResult.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    if (!(message.actions && message.actions.length))
                        message.actions = [];
                    message.actions.push($root.ActionSuggestion.decode(reader, reader.uint32()));
                    break;
                }
            case 4: {
                    if (!(message.codeSuggestions && message.codeSuggestions.length))
                        message.codeSuggestions = [];
                    message.codeSuggestions.push($root.CodeSuggestion.decode(reader, reader.uint32()));
                    break;
                }
            case 5: {
                    if (!(message.relevantFiles && message.relevantFiles.length))
                        message.relevantFiles = [];
                    message.relevantFiles.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MaxModeResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MaxModeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MaxModeResponse} MaxModeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MaxModeResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MaxModeResponse message.
     * @function verify
     * @memberof MaxModeResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MaxModeResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.thinkingProcess != null && message.hasOwnProperty("thinkingProcess"))
            if (!$util.isString(message.thinkingProcess))
                return "thinkingProcess: string expected";
        if (message.analysis != null && message.hasOwnProperty("analysis")) {
            var error = $root.AnalysisResult.verify(message.analysis);
            if (error)
                return "analysis." + error;
        }
        if (message.actions != null && message.hasOwnProperty("actions")) {
            if (!Array.isArray(message.actions))
                return "actions: array expected";
            for (var i = 0; i < message.actions.length; ++i) {
                var error = $root.ActionSuggestion.verify(message.actions[i]);
                if (error)
                    return "actions." + error;
            }
        }
        if (message.codeSuggestions != null && message.hasOwnProperty("codeSuggestions")) {
            if (!Array.isArray(message.codeSuggestions))
                return "codeSuggestions: array expected";
            for (var i = 0; i < message.codeSuggestions.length; ++i) {
                var error = $root.CodeSuggestion.verify(message.codeSuggestions[i]);
                if (error)
                    return "codeSuggestions." + error;
            }
        }
        if (message.relevantFiles != null && message.hasOwnProperty("relevantFiles")) {
            if (!Array.isArray(message.relevantFiles))
                return "relevantFiles: array expected";
            for (var i = 0; i < message.relevantFiles.length; ++i)
                if (!$util.isString(message.relevantFiles[i]))
                    return "relevantFiles: string[] expected";
        }
        return null;
    };

    /**
     * Creates a MaxModeResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MaxModeResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MaxModeResponse} MaxModeResponse
     */
    MaxModeResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.MaxModeResponse)
            return object;
        var message = new $root.MaxModeResponse();
        if (object.thinkingProcess != null)
            message.thinkingProcess = String(object.thinkingProcess);
        if (object.analysis != null) {
            if (typeof object.analysis !== "object")
                throw TypeError(".MaxModeResponse.analysis: object expected");
            message.analysis = $root.AnalysisResult.fromObject(object.analysis);
        }
        if (object.actions) {
            if (!Array.isArray(object.actions))
                throw TypeError(".MaxModeResponse.actions: array expected");
            message.actions = [];
            for (var i = 0; i < object.actions.length; ++i) {
                if (typeof object.actions[i] !== "object")
                    throw TypeError(".MaxModeResponse.actions: object expected");
                message.actions[i] = $root.ActionSuggestion.fromObject(object.actions[i]);
            }
        }
        if (object.codeSuggestions) {
            if (!Array.isArray(object.codeSuggestions))
                throw TypeError(".MaxModeResponse.codeSuggestions: array expected");
            message.codeSuggestions = [];
            for (var i = 0; i < object.codeSuggestions.length; ++i) {
                if (typeof object.codeSuggestions[i] !== "object")
                    throw TypeError(".MaxModeResponse.codeSuggestions: object expected");
                message.codeSuggestions[i] = $root.CodeSuggestion.fromObject(object.codeSuggestions[i]);
            }
        }
        if (object.relevantFiles) {
            if (!Array.isArray(object.relevantFiles))
                throw TypeError(".MaxModeResponse.relevantFiles: array expected");
            message.relevantFiles = [];
            for (var i = 0; i < object.relevantFiles.length; ++i)
                message.relevantFiles[i] = String(object.relevantFiles[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a MaxModeResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MaxModeResponse
     * @static
     * @param {MaxModeResponse} message MaxModeResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MaxModeResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.actions = [];
            object.codeSuggestions = [];
            object.relevantFiles = [];
        }
        if (options.defaults) {
            object.thinkingProcess = "";
            object.analysis = null;
        }
        if (message.thinkingProcess != null && message.hasOwnProperty("thinkingProcess"))
            object.thinkingProcess = message.thinkingProcess;
        if (message.analysis != null && message.hasOwnProperty("analysis"))
            object.analysis = $root.AnalysisResult.toObject(message.analysis, options);
        if (message.actions && message.actions.length) {
            object.actions = [];
            for (var j = 0; j < message.actions.length; ++j)
                object.actions[j] = $root.ActionSuggestion.toObject(message.actions[j], options);
        }
        if (message.codeSuggestions && message.codeSuggestions.length) {
            object.codeSuggestions = [];
            for (var j = 0; j < message.codeSuggestions.length; ++j)
                object.codeSuggestions[j] = $root.CodeSuggestion.toObject(message.codeSuggestions[j], options);
        }
        if (message.relevantFiles && message.relevantFiles.length) {
            object.relevantFiles = [];
            for (var j = 0; j < message.relevantFiles.length; ++j)
                object.relevantFiles[j] = message.relevantFiles[j];
        }
        return object;
    };

    /**
     * Converts this MaxModeResponse to JSON.
     * @function toJSON
     * @memberof MaxModeResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MaxModeResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MaxModeResponse
     * @function getTypeUrl
     * @memberof MaxModeResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MaxModeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MaxModeResponse";
    };

    return MaxModeResponse;
})();

$root.AnalysisResult = (function() {

    /**
     * Properties of an AnalysisResult.
     * @exports IAnalysisResult
     * @interface IAnalysisResult
     * @property {string|null} [problemAnalysis] AnalysisResult problemAnalysis
     * @property {string|null} [solutionApproach] AnalysisResult solutionApproach
     * @property {Array.<string>|null} [risks] AnalysisResult risks
     * @property {Array.<string>|null} [dependencies] AnalysisResult dependencies
     * @property {string|null} [complexityAssessment] AnalysisResult complexityAssessment
     */

    /**
     * Constructs a new AnalysisResult.
     * @exports AnalysisResult
     * @classdesc Represents an AnalysisResult.
     * @implements IAnalysisResult
     * @constructor
     * @param {IAnalysisResult=} [properties] Properties to set
     */
    function AnalysisResult(properties) {
        this.risks = [];
        this.dependencies = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AnalysisResult problemAnalysis.
     * @member {string} problemAnalysis
     * @memberof AnalysisResult
     * @instance
     */
    AnalysisResult.prototype.problemAnalysis = "";

    /**
     * AnalysisResult solutionApproach.
     * @member {string} solutionApproach
     * @memberof AnalysisResult
     * @instance
     */
    AnalysisResult.prototype.solutionApproach = "";

    /**
     * AnalysisResult risks.
     * @member {Array.<string>} risks
     * @memberof AnalysisResult
     * @instance
     */
    AnalysisResult.prototype.risks = $util.emptyArray;

    /**
     * AnalysisResult dependencies.
     * @member {Array.<string>} dependencies
     * @memberof AnalysisResult
     * @instance
     */
    AnalysisResult.prototype.dependencies = $util.emptyArray;

    /**
     * AnalysisResult complexityAssessment.
     * @member {string} complexityAssessment
     * @memberof AnalysisResult
     * @instance
     */
    AnalysisResult.prototype.complexityAssessment = "";

    /**
     * Creates a new AnalysisResult instance using the specified properties.
     * @function create
     * @memberof AnalysisResult
     * @static
     * @param {IAnalysisResult=} [properties] Properties to set
     * @returns {AnalysisResult} AnalysisResult instance
     */
    AnalysisResult.create = function create(properties) {
        return new AnalysisResult(properties);
    };

    /**
     * Encodes the specified AnalysisResult message. Does not implicitly {@link AnalysisResult.verify|verify} messages.
     * @function encode
     * @memberof AnalysisResult
     * @static
     * @param {IAnalysisResult} message AnalysisResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AnalysisResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.problemAnalysis != null && Object.hasOwnProperty.call(message, "problemAnalysis"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.problemAnalysis);
        if (message.solutionApproach != null && Object.hasOwnProperty.call(message, "solutionApproach"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.solutionApproach);
        if (message.risks != null && message.risks.length)
            for (var i = 0; i < message.risks.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.risks[i]);
        if (message.dependencies != null && message.dependencies.length)
            for (var i = 0; i < message.dependencies.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.dependencies[i]);
        if (message.complexityAssessment != null && Object.hasOwnProperty.call(message, "complexityAssessment"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.complexityAssessment);
        return writer;
    };

    /**
     * Encodes the specified AnalysisResult message, length delimited. Does not implicitly {@link AnalysisResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AnalysisResult
     * @static
     * @param {IAnalysisResult} message AnalysisResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AnalysisResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AnalysisResult message from the specified reader or buffer.
     * @function decode
     * @memberof AnalysisResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AnalysisResult} AnalysisResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AnalysisResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AnalysisResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.problemAnalysis = reader.string();
                    break;
                }
            case 2: {
                    message.solutionApproach = reader.string();
                    break;
                }
            case 3: {
                    if (!(message.risks && message.risks.length))
                        message.risks = [];
                    message.risks.push(reader.string());
                    break;
                }
            case 4: {
                    if (!(message.dependencies && message.dependencies.length))
                        message.dependencies = [];
                    message.dependencies.push(reader.string());
                    break;
                }
            case 5: {
                    message.complexityAssessment = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AnalysisResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AnalysisResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AnalysisResult} AnalysisResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AnalysisResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AnalysisResult message.
     * @function verify
     * @memberof AnalysisResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AnalysisResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.problemAnalysis != null && message.hasOwnProperty("problemAnalysis"))
            if (!$util.isString(message.problemAnalysis))
                return "problemAnalysis: string expected";
        if (message.solutionApproach != null && message.hasOwnProperty("solutionApproach"))
            if (!$util.isString(message.solutionApproach))
                return "solutionApproach: string expected";
        if (message.risks != null && message.hasOwnProperty("risks")) {
            if (!Array.isArray(message.risks))
                return "risks: array expected";
            for (var i = 0; i < message.risks.length; ++i)
                if (!$util.isString(message.risks[i]))
                    return "risks: string[] expected";
        }
        if (message.dependencies != null && message.hasOwnProperty("dependencies")) {
            if (!Array.isArray(message.dependencies))
                return "dependencies: array expected";
            for (var i = 0; i < message.dependencies.length; ++i)
                if (!$util.isString(message.dependencies[i]))
                    return "dependencies: string[] expected";
        }
        if (message.complexityAssessment != null && message.hasOwnProperty("complexityAssessment"))
            if (!$util.isString(message.complexityAssessment))
                return "complexityAssessment: string expected";
        return null;
    };

    /**
     * Creates an AnalysisResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AnalysisResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AnalysisResult} AnalysisResult
     */
    AnalysisResult.fromObject = function fromObject(object) {
        if (object instanceof $root.AnalysisResult)
            return object;
        var message = new $root.AnalysisResult();
        if (object.problemAnalysis != null)
            message.problemAnalysis = String(object.problemAnalysis);
        if (object.solutionApproach != null)
            message.solutionApproach = String(object.solutionApproach);
        if (object.risks) {
            if (!Array.isArray(object.risks))
                throw TypeError(".AnalysisResult.risks: array expected");
            message.risks = [];
            for (var i = 0; i < object.risks.length; ++i)
                message.risks[i] = String(object.risks[i]);
        }
        if (object.dependencies) {
            if (!Array.isArray(object.dependencies))
                throw TypeError(".AnalysisResult.dependencies: array expected");
            message.dependencies = [];
            for (var i = 0; i < object.dependencies.length; ++i)
                message.dependencies[i] = String(object.dependencies[i]);
        }
        if (object.complexityAssessment != null)
            message.complexityAssessment = String(object.complexityAssessment);
        return message;
    };

    /**
     * Creates a plain object from an AnalysisResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AnalysisResult
     * @static
     * @param {AnalysisResult} message AnalysisResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AnalysisResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.risks = [];
            object.dependencies = [];
        }
        if (options.defaults) {
            object.problemAnalysis = "";
            object.solutionApproach = "";
            object.complexityAssessment = "";
        }
        if (message.problemAnalysis != null && message.hasOwnProperty("problemAnalysis"))
            object.problemAnalysis = message.problemAnalysis;
        if (message.solutionApproach != null && message.hasOwnProperty("solutionApproach"))
            object.solutionApproach = message.solutionApproach;
        if (message.risks && message.risks.length) {
            object.risks = [];
            for (var j = 0; j < message.risks.length; ++j)
                object.risks[j] = message.risks[j];
        }
        if (message.dependencies && message.dependencies.length) {
            object.dependencies = [];
            for (var j = 0; j < message.dependencies.length; ++j)
                object.dependencies[j] = message.dependencies[j];
        }
        if (message.complexityAssessment != null && message.hasOwnProperty("complexityAssessment"))
            object.complexityAssessment = message.complexityAssessment;
        return object;
    };

    /**
     * Converts this AnalysisResult to JSON.
     * @function toJSON
     * @memberof AnalysisResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AnalysisResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AnalysisResult
     * @function getTypeUrl
     * @memberof AnalysisResult
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AnalysisResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AnalysisResult";
    };

    return AnalysisResult;
})();

$root.ActionSuggestion = (function() {

    /**
     * Properties of an ActionSuggestion.
     * @exports IActionSuggestion
     * @interface IActionSuggestion
     * @property {string|null} [actionType] ActionSuggestion actionType
     * @property {string|null} [description] ActionSuggestion description
     * @property {number|null} [priority] ActionSuggestion priority
     * @property {Array.<string>|null} [affectedFiles] ActionSuggestion affectedFiles
     * @property {string|null} [estimatedTime] ActionSuggestion estimatedTime
     */

    /**
     * Constructs a new ActionSuggestion.
     * @exports ActionSuggestion
     * @classdesc Represents an ActionSuggestion.
     * @implements IActionSuggestion
     * @constructor
     * @param {IActionSuggestion=} [properties] Properties to set
     */
    function ActionSuggestion(properties) {
        this.affectedFiles = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ActionSuggestion actionType.
     * @member {string} actionType
     * @memberof ActionSuggestion
     * @instance
     */
    ActionSuggestion.prototype.actionType = "";

    /**
     * ActionSuggestion description.
     * @member {string} description
     * @memberof ActionSuggestion
     * @instance
     */
    ActionSuggestion.prototype.description = "";

    /**
     * ActionSuggestion priority.
     * @member {number} priority
     * @memberof ActionSuggestion
     * @instance
     */
    ActionSuggestion.prototype.priority = 0;

    /**
     * ActionSuggestion affectedFiles.
     * @member {Array.<string>} affectedFiles
     * @memberof ActionSuggestion
     * @instance
     */
    ActionSuggestion.prototype.affectedFiles = $util.emptyArray;

    /**
     * ActionSuggestion estimatedTime.
     * @member {string} estimatedTime
     * @memberof ActionSuggestion
     * @instance
     */
    ActionSuggestion.prototype.estimatedTime = "";

    /**
     * Creates a new ActionSuggestion instance using the specified properties.
     * @function create
     * @memberof ActionSuggestion
     * @static
     * @param {IActionSuggestion=} [properties] Properties to set
     * @returns {ActionSuggestion} ActionSuggestion instance
     */
    ActionSuggestion.create = function create(properties) {
        return new ActionSuggestion(properties);
    };

    /**
     * Encodes the specified ActionSuggestion message. Does not implicitly {@link ActionSuggestion.verify|verify} messages.
     * @function encode
     * @memberof ActionSuggestion
     * @static
     * @param {IActionSuggestion} message ActionSuggestion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionSuggestion.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.actionType != null && Object.hasOwnProperty.call(message, "actionType"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.actionType);
        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
        if (message.priority != null && Object.hasOwnProperty.call(message, "priority"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.priority);
        if (message.affectedFiles != null && message.affectedFiles.length)
            for (var i = 0; i < message.affectedFiles.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.affectedFiles[i]);
        if (message.estimatedTime != null && Object.hasOwnProperty.call(message, "estimatedTime"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.estimatedTime);
        return writer;
    };

    /**
     * Encodes the specified ActionSuggestion message, length delimited. Does not implicitly {@link ActionSuggestion.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ActionSuggestion
     * @static
     * @param {IActionSuggestion} message ActionSuggestion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionSuggestion.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ActionSuggestion message from the specified reader or buffer.
     * @function decode
     * @memberof ActionSuggestion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ActionSuggestion} ActionSuggestion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionSuggestion.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionSuggestion();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.actionType = reader.string();
                    break;
                }
            case 2: {
                    message.description = reader.string();
                    break;
                }
            case 3: {
                    message.priority = reader.int32();
                    break;
                }
            case 4: {
                    if (!(message.affectedFiles && message.affectedFiles.length))
                        message.affectedFiles = [];
                    message.affectedFiles.push(reader.string());
                    break;
                }
            case 5: {
                    message.estimatedTime = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ActionSuggestion message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ActionSuggestion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ActionSuggestion} ActionSuggestion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionSuggestion.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ActionSuggestion message.
     * @function verify
     * @memberof ActionSuggestion
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ActionSuggestion.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.actionType != null && message.hasOwnProperty("actionType"))
            if (!$util.isString(message.actionType))
                return "actionType: string expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        if (message.priority != null && message.hasOwnProperty("priority"))
            if (!$util.isInteger(message.priority))
                return "priority: integer expected";
        if (message.affectedFiles != null && message.hasOwnProperty("affectedFiles")) {
            if (!Array.isArray(message.affectedFiles))
                return "affectedFiles: array expected";
            for (var i = 0; i < message.affectedFiles.length; ++i)
                if (!$util.isString(message.affectedFiles[i]))
                    return "affectedFiles: string[] expected";
        }
        if (message.estimatedTime != null && message.hasOwnProperty("estimatedTime"))
            if (!$util.isString(message.estimatedTime))
                return "estimatedTime: string expected";
        return null;
    };

    /**
     * Creates an ActionSuggestion message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ActionSuggestion
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ActionSuggestion} ActionSuggestion
     */
    ActionSuggestion.fromObject = function fromObject(object) {
        if (object instanceof $root.ActionSuggestion)
            return object;
        var message = new $root.ActionSuggestion();
        if (object.actionType != null)
            message.actionType = String(object.actionType);
        if (object.description != null)
            message.description = String(object.description);
        if (object.priority != null)
            message.priority = object.priority | 0;
        if (object.affectedFiles) {
            if (!Array.isArray(object.affectedFiles))
                throw TypeError(".ActionSuggestion.affectedFiles: array expected");
            message.affectedFiles = [];
            for (var i = 0; i < object.affectedFiles.length; ++i)
                message.affectedFiles[i] = String(object.affectedFiles[i]);
        }
        if (object.estimatedTime != null)
            message.estimatedTime = String(object.estimatedTime);
        return message;
    };

    /**
     * Creates a plain object from an ActionSuggestion message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ActionSuggestion
     * @static
     * @param {ActionSuggestion} message ActionSuggestion
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ActionSuggestion.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.affectedFiles = [];
        if (options.defaults) {
            object.actionType = "";
            object.description = "";
            object.priority = 0;
            object.estimatedTime = "";
        }
        if (message.actionType != null && message.hasOwnProperty("actionType"))
            object.actionType = message.actionType;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        if (message.priority != null && message.hasOwnProperty("priority"))
            object.priority = message.priority;
        if (message.affectedFiles && message.affectedFiles.length) {
            object.affectedFiles = [];
            for (var j = 0; j < message.affectedFiles.length; ++j)
                object.affectedFiles[j] = message.affectedFiles[j];
        }
        if (message.estimatedTime != null && message.hasOwnProperty("estimatedTime"))
            object.estimatedTime = message.estimatedTime;
        return object;
    };

    /**
     * Converts this ActionSuggestion to JSON.
     * @function toJSON
     * @memberof ActionSuggestion
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ActionSuggestion.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ActionSuggestion
     * @function getTypeUrl
     * @memberof ActionSuggestion
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ActionSuggestion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ActionSuggestion";
    };

    return ActionSuggestion;
})();

$root.CodeSuggestion = (function() {

    /**
     * Properties of a CodeSuggestion.
     * @exports ICodeSuggestion
     * @interface ICodeSuggestion
     * @property {string|null} [filePath] CodeSuggestion filePath
     * @property {number|null} [startLine] CodeSuggestion startLine
     * @property {number|null} [endLine] CodeSuggestion endLine
     * @property {string|null} [originalCode] CodeSuggestion originalCode
     * @property {string|null} [suggestedCode] CodeSuggestion suggestedCode
     * @property {string|null} [explanation] CodeSuggestion explanation
     * @property {string|null} [improvementType] CodeSuggestion improvementType
     */

    /**
     * Constructs a new CodeSuggestion.
     * @exports CodeSuggestion
     * @classdesc Represents a CodeSuggestion.
     * @implements ICodeSuggestion
     * @constructor
     * @param {ICodeSuggestion=} [properties] Properties to set
     */
    function CodeSuggestion(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CodeSuggestion filePath.
     * @member {string} filePath
     * @memberof CodeSuggestion
     * @instance
     */
    CodeSuggestion.prototype.filePath = "";

    /**
     * CodeSuggestion startLine.
     * @member {number} startLine
     * @memberof CodeSuggestion
     * @instance
     */
    CodeSuggestion.prototype.startLine = 0;

    /**
     * CodeSuggestion endLine.
     * @member {number} endLine
     * @memberof CodeSuggestion
     * @instance
     */
    CodeSuggestion.prototype.endLine = 0;

    /**
     * CodeSuggestion originalCode.
     * @member {string} originalCode
     * @memberof CodeSuggestion
     * @instance
     */
    CodeSuggestion.prototype.originalCode = "";

    /**
     * CodeSuggestion suggestedCode.
     * @member {string} suggestedCode
     * @memberof CodeSuggestion
     * @instance
     */
    CodeSuggestion.prototype.suggestedCode = "";

    /**
     * CodeSuggestion explanation.
     * @member {string} explanation
     * @memberof CodeSuggestion
     * @instance
     */
    CodeSuggestion.prototype.explanation = "";

    /**
     * CodeSuggestion improvementType.
     * @member {string} improvementType
     * @memberof CodeSuggestion
     * @instance
     */
    CodeSuggestion.prototype.improvementType = "";

    /**
     * Creates a new CodeSuggestion instance using the specified properties.
     * @function create
     * @memberof CodeSuggestion
     * @static
     * @param {ICodeSuggestion=} [properties] Properties to set
     * @returns {CodeSuggestion} CodeSuggestion instance
     */
    CodeSuggestion.create = function create(properties) {
        return new CodeSuggestion(properties);
    };

    /**
     * Encodes the specified CodeSuggestion message. Does not implicitly {@link CodeSuggestion.verify|verify} messages.
     * @function encode
     * @memberof CodeSuggestion
     * @static
     * @param {ICodeSuggestion} message CodeSuggestion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CodeSuggestion.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.filePath != null && Object.hasOwnProperty.call(message, "filePath"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.filePath);
        if (message.startLine != null && Object.hasOwnProperty.call(message, "startLine"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.startLine);
        if (message.endLine != null && Object.hasOwnProperty.call(message, "endLine"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.endLine);
        if (message.originalCode != null && Object.hasOwnProperty.call(message, "originalCode"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.originalCode);
        if (message.suggestedCode != null && Object.hasOwnProperty.call(message, "suggestedCode"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.suggestedCode);
        if (message.explanation != null && Object.hasOwnProperty.call(message, "explanation"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.explanation);
        if (message.improvementType != null && Object.hasOwnProperty.call(message, "improvementType"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.improvementType);
        return writer;
    };

    /**
     * Encodes the specified CodeSuggestion message, length delimited. Does not implicitly {@link CodeSuggestion.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CodeSuggestion
     * @static
     * @param {ICodeSuggestion} message CodeSuggestion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CodeSuggestion.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CodeSuggestion message from the specified reader or buffer.
     * @function decode
     * @memberof CodeSuggestion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CodeSuggestion} CodeSuggestion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CodeSuggestion.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CodeSuggestion();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.filePath = reader.string();
                    break;
                }
            case 2: {
                    message.startLine = reader.int32();
                    break;
                }
            case 3: {
                    message.endLine = reader.int32();
                    break;
                }
            case 4: {
                    message.originalCode = reader.string();
                    break;
                }
            case 5: {
                    message.suggestedCode = reader.string();
                    break;
                }
            case 6: {
                    message.explanation = reader.string();
                    break;
                }
            case 7: {
                    message.improvementType = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CodeSuggestion message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CodeSuggestion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CodeSuggestion} CodeSuggestion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CodeSuggestion.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CodeSuggestion message.
     * @function verify
     * @memberof CodeSuggestion
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CodeSuggestion.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.filePath != null && message.hasOwnProperty("filePath"))
            if (!$util.isString(message.filePath))
                return "filePath: string expected";
        if (message.startLine != null && message.hasOwnProperty("startLine"))
            if (!$util.isInteger(message.startLine))
                return "startLine: integer expected";
        if (message.endLine != null && message.hasOwnProperty("endLine"))
            if (!$util.isInteger(message.endLine))
                return "endLine: integer expected";
        if (message.originalCode != null && message.hasOwnProperty("originalCode"))
            if (!$util.isString(message.originalCode))
                return "originalCode: string expected";
        if (message.suggestedCode != null && message.hasOwnProperty("suggestedCode"))
            if (!$util.isString(message.suggestedCode))
                return "suggestedCode: string expected";
        if (message.explanation != null && message.hasOwnProperty("explanation"))
            if (!$util.isString(message.explanation))
                return "explanation: string expected";
        if (message.improvementType != null && message.hasOwnProperty("improvementType"))
            if (!$util.isString(message.improvementType))
                return "improvementType: string expected";
        return null;
    };

    /**
     * Creates a CodeSuggestion message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CodeSuggestion
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CodeSuggestion} CodeSuggestion
     */
    CodeSuggestion.fromObject = function fromObject(object) {
        if (object instanceof $root.CodeSuggestion)
            return object;
        var message = new $root.CodeSuggestion();
        if (object.filePath != null)
            message.filePath = String(object.filePath);
        if (object.startLine != null)
            message.startLine = object.startLine | 0;
        if (object.endLine != null)
            message.endLine = object.endLine | 0;
        if (object.originalCode != null)
            message.originalCode = String(object.originalCode);
        if (object.suggestedCode != null)
            message.suggestedCode = String(object.suggestedCode);
        if (object.explanation != null)
            message.explanation = String(object.explanation);
        if (object.improvementType != null)
            message.improvementType = String(object.improvementType);
        return message;
    };

    /**
     * Creates a plain object from a CodeSuggestion message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CodeSuggestion
     * @static
     * @param {CodeSuggestion} message CodeSuggestion
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CodeSuggestion.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.filePath = "";
            object.startLine = 0;
            object.endLine = 0;
            object.originalCode = "";
            object.suggestedCode = "";
            object.explanation = "";
            object.improvementType = "";
        }
        if (message.filePath != null && message.hasOwnProperty("filePath"))
            object.filePath = message.filePath;
        if (message.startLine != null && message.hasOwnProperty("startLine"))
            object.startLine = message.startLine;
        if (message.endLine != null && message.hasOwnProperty("endLine"))
            object.endLine = message.endLine;
        if (message.originalCode != null && message.hasOwnProperty("originalCode"))
            object.originalCode = message.originalCode;
        if (message.suggestedCode != null && message.hasOwnProperty("suggestedCode"))
            object.suggestedCode = message.suggestedCode;
        if (message.explanation != null && message.hasOwnProperty("explanation"))
            object.explanation = message.explanation;
        if (message.improvementType != null && message.hasOwnProperty("improvementType"))
            object.improvementType = message.improvementType;
        return object;
    };

    /**
     * Converts this CodeSuggestion to JSON.
     * @function toJSON
     * @memberof CodeSuggestion
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CodeSuggestion.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CodeSuggestion
     * @function getTypeUrl
     * @memberof CodeSuggestion
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CodeSuggestion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CodeSuggestion";
    };

    return CodeSuggestion;
})();

$root.AvailableModelsResponse = (function() {

    /**
     * Properties of an AvailableModelsResponse.
     * @exports IAvailableModelsResponse
     * @interface IAvailableModelsResponse
     * @property {Array.<AvailableModelsResponse.IAvailableModel>|null} [models] AvailableModelsResponse models
     * @property {Array.<string>|null} [modelNames] AvailableModelsResponse modelNames
     */

    /**
     * Constructs a new AvailableModelsResponse.
     * @exports AvailableModelsResponse
     * @classdesc Represents an AvailableModelsResponse.
     * @implements IAvailableModelsResponse
     * @constructor
     * @param {IAvailableModelsResponse=} [properties] Properties to set
     */
    function AvailableModelsResponse(properties) {
        this.models = [];
        this.modelNames = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AvailableModelsResponse models.
     * @member {Array.<AvailableModelsResponse.IAvailableModel>} models
     * @memberof AvailableModelsResponse
     * @instance
     */
    AvailableModelsResponse.prototype.models = $util.emptyArray;

    /**
     * AvailableModelsResponse modelNames.
     * @member {Array.<string>} modelNames
     * @memberof AvailableModelsResponse
     * @instance
     */
    AvailableModelsResponse.prototype.modelNames = $util.emptyArray;

    /**
     * Creates a new AvailableModelsResponse instance using the specified properties.
     * @function create
     * @memberof AvailableModelsResponse
     * @static
     * @param {IAvailableModelsResponse=} [properties] Properties to set
     * @returns {AvailableModelsResponse} AvailableModelsResponse instance
     */
    AvailableModelsResponse.create = function create(properties) {
        return new AvailableModelsResponse(properties);
    };

    /**
     * Encodes the specified AvailableModelsResponse message. Does not implicitly {@link AvailableModelsResponse.verify|verify} messages.
     * @function encode
     * @memberof AvailableModelsResponse
     * @static
     * @param {IAvailableModelsResponse} message AvailableModelsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AvailableModelsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.modelNames != null && message.modelNames.length)
            for (var i = 0; i < message.modelNames.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.modelNames[i]);
        if (message.models != null && message.models.length)
            for (var i = 0; i < message.models.length; ++i)
                $root.AvailableModelsResponse.AvailableModel.encode(message.models[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AvailableModelsResponse message, length delimited. Does not implicitly {@link AvailableModelsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AvailableModelsResponse
     * @static
     * @param {IAvailableModelsResponse} message AvailableModelsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AvailableModelsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AvailableModelsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AvailableModelsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AvailableModelsResponse} AvailableModelsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AvailableModelsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AvailableModelsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2: {
                    if (!(message.models && message.models.length))
                        message.models = [];
                    message.models.push($root.AvailableModelsResponse.AvailableModel.decode(reader, reader.uint32()));
                    break;
                }
            case 1: {
                    if (!(message.modelNames && message.modelNames.length))
                        message.modelNames = [];
                    message.modelNames.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AvailableModelsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AvailableModelsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AvailableModelsResponse} AvailableModelsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AvailableModelsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AvailableModelsResponse message.
     * @function verify
     * @memberof AvailableModelsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AvailableModelsResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.models != null && message.hasOwnProperty("models")) {
            if (!Array.isArray(message.models))
                return "models: array expected";
            for (var i = 0; i < message.models.length; ++i) {
                var error = $root.AvailableModelsResponse.AvailableModel.verify(message.models[i]);
                if (error)
                    return "models." + error;
            }
        }
        if (message.modelNames != null && message.hasOwnProperty("modelNames")) {
            if (!Array.isArray(message.modelNames))
                return "modelNames: array expected";
            for (var i = 0; i < message.modelNames.length; ++i)
                if (!$util.isString(message.modelNames[i]))
                    return "modelNames: string[] expected";
        }
        return null;
    };

    /**
     * Creates an AvailableModelsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AvailableModelsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AvailableModelsResponse} AvailableModelsResponse
     */
    AvailableModelsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.AvailableModelsResponse)
            return object;
        var message = new $root.AvailableModelsResponse();
        if (object.models) {
            if (!Array.isArray(object.models))
                throw TypeError(".AvailableModelsResponse.models: array expected");
            message.models = [];
            for (var i = 0; i < object.models.length; ++i) {
                if (typeof object.models[i] !== "object")
                    throw TypeError(".AvailableModelsResponse.models: object expected");
                message.models[i] = $root.AvailableModelsResponse.AvailableModel.fromObject(object.models[i]);
            }
        }
        if (object.modelNames) {
            if (!Array.isArray(object.modelNames))
                throw TypeError(".AvailableModelsResponse.modelNames: array expected");
            message.modelNames = [];
            for (var i = 0; i < object.modelNames.length; ++i)
                message.modelNames[i] = String(object.modelNames[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an AvailableModelsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AvailableModelsResponse
     * @static
     * @param {AvailableModelsResponse} message AvailableModelsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AvailableModelsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.modelNames = [];
            object.models = [];
        }
        if (message.modelNames && message.modelNames.length) {
            object.modelNames = [];
            for (var j = 0; j < message.modelNames.length; ++j)
                object.modelNames[j] = message.modelNames[j];
        }
        if (message.models && message.models.length) {
            object.models = [];
            for (var j = 0; j < message.models.length; ++j)
                object.models[j] = $root.AvailableModelsResponse.AvailableModel.toObject(message.models[j], options);
        }
        return object;
    };

    /**
     * Converts this AvailableModelsResponse to JSON.
     * @function toJSON
     * @memberof AvailableModelsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AvailableModelsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AvailableModelsResponse
     * @function getTypeUrl
     * @memberof AvailableModelsResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AvailableModelsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AvailableModelsResponse";
    };

    AvailableModelsResponse.AvailableModel = (function() {

        /**
         * Properties of an AvailableModel.
         * @memberof AvailableModelsResponse
         * @interface IAvailableModel
         * @property {string|null} [name] AvailableModel name
         * @property {boolean|null} [defaultOn] AvailableModel defaultOn
         * @property {boolean|null} [isLongContextOnly] AvailableModel isLongContextOnly
         * @property {boolean|null} [isChatOnly] AvailableModel isChatOnly
         */

        /**
         * Constructs a new AvailableModel.
         * @memberof AvailableModelsResponse
         * @classdesc Represents an AvailableModel.
         * @implements IAvailableModel
         * @constructor
         * @param {AvailableModelsResponse.IAvailableModel=} [properties] Properties to set
         */
        function AvailableModel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AvailableModel name.
         * @member {string} name
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         */
        AvailableModel.prototype.name = "";

        /**
         * AvailableModel defaultOn.
         * @member {boolean} defaultOn
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         */
        AvailableModel.prototype.defaultOn = false;

        /**
         * AvailableModel isLongContextOnly.
         * @member {boolean|null|undefined} isLongContextOnly
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         */
        AvailableModel.prototype.isLongContextOnly = null;

        /**
         * AvailableModel isChatOnly.
         * @member {boolean|null|undefined} isChatOnly
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         */
        AvailableModel.prototype.isChatOnly = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AvailableModel.prototype, "_isLongContextOnly", {
            get: $util.oneOfGetter($oneOfFields = ["isLongContextOnly"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AvailableModel.prototype, "_isChatOnly", {
            get: $util.oneOfGetter($oneOfFields = ["isChatOnly"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AvailableModel instance using the specified properties.
         * @function create
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {AvailableModelsResponse.IAvailableModel=} [properties] Properties to set
         * @returns {AvailableModelsResponse.AvailableModel} AvailableModel instance
         */
        AvailableModel.create = function create(properties) {
            return new AvailableModel(properties);
        };

        /**
         * Encodes the specified AvailableModel message. Does not implicitly {@link AvailableModelsResponse.AvailableModel.verify|verify} messages.
         * @function encode
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {AvailableModelsResponse.IAvailableModel} message AvailableModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AvailableModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.defaultOn != null && Object.hasOwnProperty.call(message, "defaultOn"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.defaultOn);
            if (message.isLongContextOnly != null && Object.hasOwnProperty.call(message, "isLongContextOnly"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isLongContextOnly);
            if (message.isChatOnly != null && Object.hasOwnProperty.call(message, "isChatOnly"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isChatOnly);
            return writer;
        };

        /**
         * Encodes the specified AvailableModel message, length delimited. Does not implicitly {@link AvailableModelsResponse.AvailableModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {AvailableModelsResponse.IAvailableModel} message AvailableModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AvailableModel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AvailableModel message from the specified reader or buffer.
         * @function decode
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AvailableModelsResponse.AvailableModel} AvailableModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AvailableModel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AvailableModelsResponse.AvailableModel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.defaultOn = reader.bool();
                        break;
                    }
                case 3: {
                        message.isLongContextOnly = reader.bool();
                        break;
                    }
                case 4: {
                        message.isChatOnly = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AvailableModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AvailableModelsResponse.AvailableModel} AvailableModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AvailableModel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AvailableModel message.
         * @function verify
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AvailableModel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.defaultOn != null && message.hasOwnProperty("defaultOn"))
                if (typeof message.defaultOn !== "boolean")
                    return "defaultOn: boolean expected";
            if (message.isLongContextOnly != null && message.hasOwnProperty("isLongContextOnly")) {
                properties._isLongContextOnly = 1;
                if (typeof message.isLongContextOnly !== "boolean")
                    return "isLongContextOnly: boolean expected";
            }
            if (message.isChatOnly != null && message.hasOwnProperty("isChatOnly")) {
                properties._isChatOnly = 1;
                if (typeof message.isChatOnly !== "boolean")
                    return "isChatOnly: boolean expected";
            }
            return null;
        };

        /**
         * Creates an AvailableModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AvailableModelsResponse.AvailableModel} AvailableModel
         */
        AvailableModel.fromObject = function fromObject(object) {
            if (object instanceof $root.AvailableModelsResponse.AvailableModel)
                return object;
            var message = new $root.AvailableModelsResponse.AvailableModel();
            if (object.name != null)
                message.name = String(object.name);
            if (object.defaultOn != null)
                message.defaultOn = Boolean(object.defaultOn);
            if (object.isLongContextOnly != null)
                message.isLongContextOnly = Boolean(object.isLongContextOnly);
            if (object.isChatOnly != null)
                message.isChatOnly = Boolean(object.isChatOnly);
            return message;
        };

        /**
         * Creates a plain object from an AvailableModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {AvailableModelsResponse.AvailableModel} message AvailableModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AvailableModel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.defaultOn = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.defaultOn != null && message.hasOwnProperty("defaultOn"))
                object.defaultOn = message.defaultOn;
            if (message.isLongContextOnly != null && message.hasOwnProperty("isLongContextOnly")) {
                object.isLongContextOnly = message.isLongContextOnly;
                if (options.oneofs)
                    object._isLongContextOnly = "isLongContextOnly";
            }
            if (message.isChatOnly != null && message.hasOwnProperty("isChatOnly")) {
                object.isChatOnly = message.isChatOnly;
                if (options.oneofs)
                    object._isChatOnly = "isChatOnly";
            }
            return object;
        };

        /**
         * Converts this AvailableModel to JSON.
         * @function toJSON
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AvailableModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AvailableModel
         * @function getTypeUrl
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AvailableModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AvailableModelsResponse.AvailableModel";
        };

        return AvailableModel;
    })();

    return AvailableModelsResponse;
})();

$root.MessageSummary = (function() {

    /**
     * Properties of a MessageSummary.
     * @exports IMessageSummary
     * @interface IMessageSummary
     * @property {string|null} [content] MessageSummary content
     * @property {string|null} [summaryId1] MessageSummary summaryId1
     * @property {string|null} [summaryId2] MessageSummary summaryId2
     * @property {string|null} [previousSummaryId] MessageSummary previousSummaryId
     */

    /**
     * Constructs a new MessageSummary.
     * @exports MessageSummary
     * @classdesc Represents a MessageSummary.
     * @implements IMessageSummary
     * @constructor
     * @param {IMessageSummary=} [properties] Properties to set
     */
    function MessageSummary(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageSummary content.
     * @member {string} content
     * @memberof MessageSummary
     * @instance
     */
    MessageSummary.prototype.content = "";

    /**
     * MessageSummary summaryId1.
     * @member {string} summaryId1
     * @memberof MessageSummary
     * @instance
     */
    MessageSummary.prototype.summaryId1 = "";

    /**
     * MessageSummary summaryId2.
     * @member {string} summaryId2
     * @memberof MessageSummary
     * @instance
     */
    MessageSummary.prototype.summaryId2 = "";

    /**
     * MessageSummary previousSummaryId.
     * @member {string} previousSummaryId
     * @memberof MessageSummary
     * @instance
     */
    MessageSummary.prototype.previousSummaryId = "";

    /**
     * Creates a new MessageSummary instance using the specified properties.
     * @function create
     * @memberof MessageSummary
     * @static
     * @param {IMessageSummary=} [properties] Properties to set
     * @returns {MessageSummary} MessageSummary instance
     */
    MessageSummary.create = function create(properties) {
        return new MessageSummary(properties);
    };

    /**
     * Encodes the specified MessageSummary message. Does not implicitly {@link MessageSummary.verify|verify} messages.
     * @function encode
     * @memberof MessageSummary
     * @static
     * @param {IMessageSummary} message MessageSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageSummary.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        if (message.summaryId1 != null && Object.hasOwnProperty.call(message, "summaryId1"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.summaryId1);
        if (message.summaryId2 != null && Object.hasOwnProperty.call(message, "summaryId2"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.summaryId2);
        if (message.previousSummaryId != null && Object.hasOwnProperty.call(message, "previousSummaryId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.previousSummaryId);
        return writer;
    };

    /**
     * Encodes the specified MessageSummary message, length delimited. Does not implicitly {@link MessageSummary.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageSummary
     * @static
     * @param {IMessageSummary} message MessageSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageSummary.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageSummary message from the specified reader or buffer.
     * @function decode
     * @memberof MessageSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageSummary} MessageSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageSummary.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageSummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.content = reader.string();
                    break;
                }
            case 2: {
                    message.summaryId1 = reader.string();
                    break;
                }
            case 3: {
                    message.summaryId2 = reader.string();
                    break;
                }
            case 4: {
                    message.previousSummaryId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MessageSummary message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageSummary} MessageSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageSummary.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageSummary message.
     * @function verify
     * @memberof MessageSummary
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageSummary.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.summaryId1 != null && message.hasOwnProperty("summaryId1"))
            if (!$util.isString(message.summaryId1))
                return "summaryId1: string expected";
        if (message.summaryId2 != null && message.hasOwnProperty("summaryId2"))
            if (!$util.isString(message.summaryId2))
                return "summaryId2: string expected";
        if (message.previousSummaryId != null && message.hasOwnProperty("previousSummaryId"))
            if (!$util.isString(message.previousSummaryId))
                return "previousSummaryId: string expected";
        return null;
    };

    /**
     * Creates a MessageSummary message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageSummary
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageSummary} MessageSummary
     */
    MessageSummary.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageSummary)
            return object;
        var message = new $root.MessageSummary();
        if (object.content != null)
            message.content = String(object.content);
        if (object.summaryId1 != null)
            message.summaryId1 = String(object.summaryId1);
        if (object.summaryId2 != null)
            message.summaryId2 = String(object.summaryId2);
        if (object.previousSummaryId != null)
            message.previousSummaryId = String(object.previousSummaryId);
        return message;
    };

    /**
     * Creates a plain object from a MessageSummary message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageSummary
     * @static
     * @param {MessageSummary} message MessageSummary
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageSummary.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.content = "";
            object.summaryId1 = "";
            object.summaryId2 = "";
            object.previousSummaryId = "";
        }
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.summaryId1 != null && message.hasOwnProperty("summaryId1"))
            object.summaryId1 = message.summaryId1;
        if (message.summaryId2 != null && message.hasOwnProperty("summaryId2"))
            object.summaryId2 = message.summaryId2;
        if (message.previousSummaryId != null && message.hasOwnProperty("previousSummaryId"))
            object.previousSummaryId = message.previousSummaryId;
        return object;
    };

    /**
     * Converts this MessageSummary to JSON.
     * @function toJSON
     * @memberof MessageSummary
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageSummary.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MessageSummary
     * @function getTypeUrl
     * @memberof MessageSummary
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MessageSummary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MessageSummary";
    };

    return MessageSummary;
})();

$root.MessageThinking = (function() {

    /**
     * Properties of a MessageThinking.
     * @exports IMessageThinking
     * @interface IMessageThinking
     * @property {string|null} [content] MessageThinking content
     */

    /**
     * Constructs a new MessageThinking.
     * @exports MessageThinking
     * @classdesc Represents a MessageThinking.
     * @implements IMessageThinking
     * @constructor
     * @param {IMessageThinking=} [properties] Properties to set
     */
    function MessageThinking(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageThinking content.
     * @member {string} content
     * @memberof MessageThinking
     * @instance
     */
    MessageThinking.prototype.content = "";

    /**
     * Creates a new MessageThinking instance using the specified properties.
     * @function create
     * @memberof MessageThinking
     * @static
     * @param {IMessageThinking=} [properties] Properties to set
     * @returns {MessageThinking} MessageThinking instance
     */
    MessageThinking.create = function create(properties) {
        return new MessageThinking(properties);
    };

    /**
     * Encodes the specified MessageThinking message. Does not implicitly {@link MessageThinking.verify|verify} messages.
     * @function encode
     * @memberof MessageThinking
     * @static
     * @param {IMessageThinking} message MessageThinking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageThinking.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        return writer;
    };

    /**
     * Encodes the specified MessageThinking message, length delimited. Does not implicitly {@link MessageThinking.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageThinking
     * @static
     * @param {IMessageThinking} message MessageThinking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageThinking.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageThinking message from the specified reader or buffer.
     * @function decode
     * @memberof MessageThinking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageThinking} MessageThinking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageThinking.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageThinking();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.content = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MessageThinking message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageThinking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageThinking} MessageThinking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageThinking.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageThinking message.
     * @function verify
     * @memberof MessageThinking
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageThinking.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        return null;
    };

    /**
     * Creates a MessageThinking message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageThinking
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageThinking} MessageThinking
     */
    MessageThinking.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageThinking)
            return object;
        var message = new $root.MessageThinking();
        if (object.content != null)
            message.content = String(object.content);
        return message;
    };

    /**
     * Creates a plain object from a MessageThinking message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageThinking
     * @static
     * @param {MessageThinking} message MessageThinking
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageThinking.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.content = "";
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        return object;
    };

    /**
     * Converts this MessageThinking to JSON.
     * @function toJSON
     * @memberof MessageThinking
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageThinking.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MessageThinking
     * @function getTypeUrl
     * @memberof MessageThinking
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MessageThinking.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MessageThinking";
    };

    return MessageThinking;
})();

$root.FileReference = (function() {

    /**
     * Properties of a FileReference.
     * @exports IFileReference
     * @interface IFileReference
     * @property {string|null} [filepath] FileReference filepath
     * @property {number|null} [fileLength] FileReference fileLength
     * @property {Uint8Array|null} [fileContent] FileReference fileContent
     */

    /**
     * Constructs a new FileReference.
     * @exports FileReference
     * @classdesc Represents a FileReference.
     * @implements IFileReference
     * @constructor
     * @param {IFileReference=} [properties] Properties to set
     */
    function FileReference(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FileReference filepath.
     * @member {string} filepath
     * @memberof FileReference
     * @instance
     */
    FileReference.prototype.filepath = "";

    /**
     * FileReference fileLength.
     * @member {number} fileLength
     * @memberof FileReference
     * @instance
     */
    FileReference.prototype.fileLength = 0;

    /**
     * FileReference fileContent.
     * @member {Uint8Array} fileContent
     * @memberof FileReference
     * @instance
     */
    FileReference.prototype.fileContent = $util.newBuffer([]);

    /**
     * Creates a new FileReference instance using the specified properties.
     * @function create
     * @memberof FileReference
     * @static
     * @param {IFileReference=} [properties] Properties to set
     * @returns {FileReference} FileReference instance
     */
    FileReference.create = function create(properties) {
        return new FileReference(properties);
    };

    /**
     * Encodes the specified FileReference message. Does not implicitly {@link FileReference.verify|verify} messages.
     * @function encode
     * @memberof FileReference
     * @static
     * @param {IFileReference} message FileReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileReference.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.filepath);
        if (message.fileLength != null && Object.hasOwnProperty.call(message, "fileLength"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fileLength);
        if (message.fileContent != null && Object.hasOwnProperty.call(message, "fileContent"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.fileContent);
        return writer;
    };

    /**
     * Encodes the specified FileReference message, length delimited. Does not implicitly {@link FileReference.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FileReference
     * @static
     * @param {IFileReference} message FileReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileReference.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FileReference message from the specified reader or buffer.
     * @function decode
     * @memberof FileReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FileReference} FileReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileReference.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.filepath = reader.string();
                    break;
                }
            case 2: {
                    message.fileLength = reader.int32();
                    break;
                }
            case 3: {
                    message.fileContent = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FileReference message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FileReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FileReference} FileReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileReference.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FileReference message.
     * @function verify
     * @memberof FileReference
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FileReference.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.filepath != null && message.hasOwnProperty("filepath"))
            if (!$util.isString(message.filepath))
                return "filepath: string expected";
        if (message.fileLength != null && message.hasOwnProperty("fileLength"))
            if (!$util.isInteger(message.fileLength))
                return "fileLength: integer expected";
        if (message.fileContent != null && message.hasOwnProperty("fileContent"))
            if (!(message.fileContent && typeof message.fileContent.length === "number" || $util.isString(message.fileContent)))
                return "fileContent: buffer expected";
        return null;
    };

    /**
     * Creates a FileReference message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FileReference
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FileReference} FileReference
     */
    FileReference.fromObject = function fromObject(object) {
        if (object instanceof $root.FileReference)
            return object;
        var message = new $root.FileReference();
        if (object.filepath != null)
            message.filepath = String(object.filepath);
        if (object.fileLength != null)
            message.fileLength = object.fileLength | 0;
        if (object.fileContent != null)
            if (typeof object.fileContent === "string")
                $util.base64.decode(object.fileContent, message.fileContent = $util.newBuffer($util.base64.length(object.fileContent)), 0);
            else if (object.fileContent.length >= 0)
                message.fileContent = object.fileContent;
        return message;
    };

    /**
     * Creates a plain object from a FileReference message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FileReference
     * @static
     * @param {FileReference} message FileReference
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FileReference.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.filepath = "";
            object.fileLength = 0;
            if (options.bytes === String)
                object.fileContent = "";
            else {
                object.fileContent = [];
                if (options.bytes !== Array)
                    object.fileContent = $util.newBuffer(object.fileContent);
            }
        }
        if (message.filepath != null && message.hasOwnProperty("filepath"))
            object.filepath = message.filepath;
        if (message.fileLength != null && message.hasOwnProperty("fileLength"))
            object.fileLength = message.fileLength;
        if (message.fileContent != null && message.hasOwnProperty("fileContent"))
            object.fileContent = options.bytes === String ? $util.base64.encode(message.fileContent, 0, message.fileContent.length) : options.bytes === Array ? Array.prototype.slice.call(message.fileContent) : message.fileContent;
        return object;
    };

    /**
     * Converts this FileReference to JSON.
     * @function toJSON
     * @memberof FileReference
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FileReference.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FileReference
     * @function getTypeUrl
     * @memberof FileReference
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FileReference.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FileReference";
    };

    return FileReference;
})();

$root.StreamUnifiedChatWithToolsRequest = (function() {

    /**
     * Properties of a StreamUnifiedChatWithToolsRequest.
     * @exports IStreamUnifiedChatWithToolsRequest
     * @interface IStreamUnifiedChatWithToolsRequest
     * @property {StreamUnifiedChatWithToolsRequest.IRequest|null} [request] StreamUnifiedChatWithToolsRequest request
     */

    /**
     * Constructs a new StreamUnifiedChatWithToolsRequest.
     * @exports StreamUnifiedChatWithToolsRequest
     * @classdesc Represents a StreamUnifiedChatWithToolsRequest.
     * @implements IStreamUnifiedChatWithToolsRequest
     * @constructor
     * @param {IStreamUnifiedChatWithToolsRequest=} [properties] Properties to set
     */
    function StreamUnifiedChatWithToolsRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StreamUnifiedChatWithToolsRequest request.
     * @member {StreamUnifiedChatWithToolsRequest.IRequest|null|undefined} request
     * @memberof StreamUnifiedChatWithToolsRequest
     * @instance
     */
    StreamUnifiedChatWithToolsRequest.prototype.request = null;

    /**
     * Creates a new StreamUnifiedChatWithToolsRequest instance using the specified properties.
     * @function create
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {IStreamUnifiedChatWithToolsRequest=} [properties] Properties to set
     * @returns {StreamUnifiedChatWithToolsRequest} StreamUnifiedChatWithToolsRequest instance
     */
    StreamUnifiedChatWithToolsRequest.create = function create(properties) {
        return new StreamUnifiedChatWithToolsRequest(properties);
    };

    /**
     * Encodes the specified StreamUnifiedChatWithToolsRequest message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.verify|verify} messages.
     * @function encode
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {IStreamUnifiedChatWithToolsRequest} message StreamUnifiedChatWithToolsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StreamUnifiedChatWithToolsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.request != null && Object.hasOwnProperty.call(message, "request"))
            $root.StreamUnifiedChatWithToolsRequest.Request.encode(message.request, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StreamUnifiedChatWithToolsRequest message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {IStreamUnifiedChatWithToolsRequest} message StreamUnifiedChatWithToolsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StreamUnifiedChatWithToolsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StreamUnifiedChatWithToolsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StreamUnifiedChatWithToolsRequest} StreamUnifiedChatWithToolsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StreamUnifiedChatWithToolsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.request = $root.StreamUnifiedChatWithToolsRequest.Request.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StreamUnifiedChatWithToolsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StreamUnifiedChatWithToolsRequest} StreamUnifiedChatWithToolsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StreamUnifiedChatWithToolsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StreamUnifiedChatWithToolsRequest message.
     * @function verify
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StreamUnifiedChatWithToolsRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.request != null && message.hasOwnProperty("request")) {
            var error = $root.StreamUnifiedChatWithToolsRequest.Request.verify(message.request);
            if (error)
                return "request." + error;
        }
        return null;
    };

    /**
     * Creates a StreamUnifiedChatWithToolsRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StreamUnifiedChatWithToolsRequest} StreamUnifiedChatWithToolsRequest
     */
    StreamUnifiedChatWithToolsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.StreamUnifiedChatWithToolsRequest)
            return object;
        var message = new $root.StreamUnifiedChatWithToolsRequest();
        if (object.request != null) {
            if (typeof object.request !== "object")
                throw TypeError(".StreamUnifiedChatWithToolsRequest.request: object expected");
            message.request = $root.StreamUnifiedChatWithToolsRequest.Request.fromObject(object.request);
        }
        return message;
    };

    /**
     * Creates a plain object from a StreamUnifiedChatWithToolsRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {StreamUnifiedChatWithToolsRequest} message StreamUnifiedChatWithToolsRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StreamUnifiedChatWithToolsRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.request = null;
        if (message.request != null && message.hasOwnProperty("request"))
            object.request = $root.StreamUnifiedChatWithToolsRequest.Request.toObject(message.request, options);
        return object;
    };

    /**
     * Converts this StreamUnifiedChatWithToolsRequest to JSON.
     * @function toJSON
     * @memberof StreamUnifiedChatWithToolsRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StreamUnifiedChatWithToolsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for StreamUnifiedChatWithToolsRequest
     * @function getTypeUrl
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StreamUnifiedChatWithToolsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest";
    };

    StreamUnifiedChatWithToolsRequest.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof StreamUnifiedChatWithToolsRequest
         * @interface IRequest
         * @property {Array.<StreamUnifiedChatWithToolsRequest.Request.IMessage>|null} [messages] Request messages
         * @property {number|null} [instructionFlag] Request instructionFlag
         * @property {StreamUnifiedChatWithToolsRequest.Request.IInstruction|null} [instruction] Request instruction
         * @property {number|null} [modelFlag] Request modelFlag
         * @property {StreamUnifiedChatWithToolsRequest.Request.IModel|null} [model] Request model
         * @property {Array.<string>|null} [wikiTool] Request wikiTool
         * @property {string|null} [webTool] Request webTool
         * @property {number|null} [requestFlag] Request requestFlag
         * @property {StreamUnifiedChatWithToolsRequest.Request.ICursorSetting|null} [cursorSetting] Request cursorSetting
         * @property {number|null} [unifiedMode] Request unifiedMode
         * @property {number|null} [thinkingLevel] Request thinkingLevel
         * @property {string|null} [conversationId] Request conversationId
         * @property {StreamUnifiedChatWithToolsRequest.Request.IMetadata|null} [metadata] Request metadata
         * @property {number|null} [unknown27] Request unknown27
         * @property {string|null} [clientVersion] Request clientVersion
         * @property {Array.<StreamUnifiedChatWithToolsRequest.Request.IMessageId>|null} [messageIds] Request messageIds
         * @property {number|null} [largeContext] Request largeContext
         * @property {number|null} [streamMode] Request streamMode
         * @property {number|null} [chatModeEnum] Request chatModeEnum
         * @property {string|null} [toolsConfig] Request toolsConfig
         * @property {number|null} [feedbackFlag] Request feedbackFlag
         * @property {number|null} [desiredMaxTokens] Request desiredMaxTokens
         * @property {IFileReference|null} [fileReference] Request fileReference
         * @property {number|null} [unknown53] Request unknown53
         * @property {string|null} [chatMode] Request chatMode
         * @property {number|null} [streamControlFlag] Request streamControlFlag
         * @property {number|null} [tokenStartFlag] Request tokenStartFlag
         * @property {number|null} [tokenControlFlag] Request tokenControlFlag
         * @property {string|null} [contentFormat] Request contentFormat
         * @property {number|null} [enableMaxFeatures] Request enableMaxFeatures
         * @property {number|null} [sessionTrackingFlag] Request sessionTrackingFlag
         */

        /**
         * Constructs a new Request.
         * @memberof StreamUnifiedChatWithToolsRequest
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {StreamUnifiedChatWithToolsRequest.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            this.messages = [];
            this.wikiTool = [];
            this.messageIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request messages.
         * @member {Array.<StreamUnifiedChatWithToolsRequest.Request.IMessage>} messages
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.messages = $util.emptyArray;

        /**
         * Request instructionFlag.
         * @member {number} instructionFlag
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.instructionFlag = 0;

        /**
         * Request instruction.
         * @member {StreamUnifiedChatWithToolsRequest.Request.IInstruction|null|undefined} instruction
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.instruction = null;

        /**
         * Request modelFlag.
         * @member {number} modelFlag
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.modelFlag = 0;

        /**
         * Request model.
         * @member {StreamUnifiedChatWithToolsRequest.Request.IModel|null|undefined} model
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.model = null;

        /**
         * Request wikiTool.
         * @member {Array.<string>} wikiTool
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.wikiTool = $util.emptyArray;

        /**
         * Request webTool.
         * @member {string} webTool
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.webTool = "";

        /**
         * Request requestFlag.
         * @member {number} requestFlag
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.requestFlag = 0;

        /**
         * Request cursorSetting.
         * @member {StreamUnifiedChatWithToolsRequest.Request.ICursorSetting|null|undefined} cursorSetting
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.cursorSetting = null;

        /**
         * Request unifiedMode.
         * @member {number} unifiedMode
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unifiedMode = 0;

        /**
         * Request thinkingLevel.
         * @member {number} thinkingLevel
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.thinkingLevel = 0;

        /**
         * Request conversationId.
         * @member {string} conversationId
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.conversationId = "";

        /**
         * Request metadata.
         * @member {StreamUnifiedChatWithToolsRequest.Request.IMetadata|null|undefined} metadata
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.metadata = null;

        /**
         * Request unknown27.
         * @member {number} unknown27
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown27 = 0;

        /**
         * Request clientVersion.
         * @member {string} clientVersion
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.clientVersion = "";

        /**
         * Request messageIds.
         * @member {Array.<StreamUnifiedChatWithToolsRequest.Request.IMessageId>} messageIds
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.messageIds = $util.emptyArray;

        /**
         * Request largeContext.
         * @member {number} largeContext
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.largeContext = 0;

        /**
         * Request streamMode.
         * @member {number} streamMode
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.streamMode = 0;

        /**
         * Request chatModeEnum.
         * @member {number} chatModeEnum
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.chatModeEnum = 0;

        /**
         * Request toolsConfig.
         * @member {string} toolsConfig
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.toolsConfig = "";

        /**
         * Request feedbackFlag.
         * @member {number} feedbackFlag
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.feedbackFlag = 0;

        /**
         * Request desiredMaxTokens.
         * @member {number} desiredMaxTokens
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.desiredMaxTokens = 0;

        /**
         * Request fileReference.
         * @member {IFileReference|null|undefined} fileReference
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.fileReference = null;

        /**
         * Request unknown53.
         * @member {number} unknown53
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown53 = 0;

        /**
         * Request chatMode.
         * @member {string} chatMode
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.chatMode = "";

        /**
         * Request streamControlFlag.
         * @member {number} streamControlFlag
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.streamControlFlag = 0;

        /**
         * Request tokenStartFlag.
         * @member {number} tokenStartFlag
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.tokenStartFlag = 0;

        /**
         * Request tokenControlFlag.
         * @member {number} tokenControlFlag
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.tokenControlFlag = 0;

        /**
         * Request contentFormat.
         * @member {string} contentFormat
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.contentFormat = "";

        /**
         * Request enableMaxFeatures.
         * @member {number} enableMaxFeatures
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.enableMaxFeatures = 0;

        /**
         * Request sessionTrackingFlag.
         * @member {number} sessionTrackingFlag
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.sessionTrackingFlag = 0;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {StreamUnifiedChatWithToolsRequest.IRequest=} [properties] Properties to set
         * @returns {StreamUnifiedChatWithToolsRequest.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.verify|verify} messages.
         * @function encode
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {StreamUnifiedChatWithToolsRequest.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.StreamUnifiedChatWithToolsRequest.Request.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.instructionFlag != null && Object.hasOwnProperty.call(message, "instructionFlag"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.instructionFlag);
            if (message.instruction != null && Object.hasOwnProperty.call(message, "instruction"))
                $root.StreamUnifiedChatWithToolsRequest.Request.Instruction.encode(message.instruction, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.modelFlag != null && Object.hasOwnProperty.call(message, "modelFlag"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.modelFlag);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                $root.StreamUnifiedChatWithToolsRequest.Request.Model.encode(message.model, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.wikiTool != null && message.wikiTool.length)
                for (var i = 0; i < message.wikiTool.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.wikiTool[i]);
            if (message.webTool != null && Object.hasOwnProperty.call(message, "webTool"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.webTool);
            if (message.requestFlag != null && Object.hasOwnProperty.call(message, "requestFlag"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.requestFlag);
            if (message.cursorSetting != null && Object.hasOwnProperty.call(message, "cursorSetting"))
                $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.encode(message.cursorSetting, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.unifiedMode != null && Object.hasOwnProperty.call(message, "unifiedMode"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.unifiedMode);
            if (message.thinkingLevel != null && Object.hasOwnProperty.call(message, "thinkingLevel"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.thinkingLevel);
            if (message.conversationId != null && Object.hasOwnProperty.call(message, "conversationId"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.conversationId);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                $root.StreamUnifiedChatWithToolsRequest.Request.Metadata.encode(message.metadata, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.unknown27 != null && Object.hasOwnProperty.call(message, "unknown27"))
                writer.uint32(/* id 27, wireType 0 =*/216).int32(message.unknown27);
            if (message.clientVersion != null && Object.hasOwnProperty.call(message, "clientVersion"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.clientVersion);
            if (message.messageIds != null && message.messageIds.length)
                for (var i = 0; i < message.messageIds.length; ++i)
                    $root.StreamUnifiedChatWithToolsRequest.Request.MessageId.encode(message.messageIds[i], writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            if (message.largeContext != null && Object.hasOwnProperty.call(message, "largeContext"))
                writer.uint32(/* id 35, wireType 0 =*/280).int32(message.largeContext);
            if (message.streamMode != null && Object.hasOwnProperty.call(message, "streamMode"))
                writer.uint32(/* id 38, wireType 0 =*/304).int32(message.streamMode);
            if (message.chatModeEnum != null && Object.hasOwnProperty.call(message, "chatModeEnum"))
                writer.uint32(/* id 46, wireType 0 =*/368).int32(message.chatModeEnum);
            if (message.toolsConfig != null && Object.hasOwnProperty.call(message, "toolsConfig"))
                writer.uint32(/* id 47, wireType 2 =*/378).string(message.toolsConfig);
            if (message.feedbackFlag != null && Object.hasOwnProperty.call(message, "feedbackFlag"))
                writer.uint32(/* id 48, wireType 0 =*/384).int32(message.feedbackFlag);
            if (message.desiredMaxTokens != null && Object.hasOwnProperty.call(message, "desiredMaxTokens"))
                writer.uint32(/* id 49, wireType 0 =*/392).int32(message.desiredMaxTokens);
            if (message.fileReference != null && Object.hasOwnProperty.call(message, "fileReference"))
                $root.FileReference.encode(message.fileReference, writer.uint32(/* id 51, wireType 2 =*/410).fork()).ldelim();
            if (message.unknown53 != null && Object.hasOwnProperty.call(message, "unknown53"))
                writer.uint32(/* id 53, wireType 0 =*/424).int32(message.unknown53);
            if (message.chatMode != null && Object.hasOwnProperty.call(message, "chatMode"))
                writer.uint32(/* id 54, wireType 2 =*/434).string(message.chatMode);
            if (message.streamControlFlag != null && Object.hasOwnProperty.call(message, "streamControlFlag"))
                writer.uint32(/* id 58, wireType 0 =*/464).int32(message.streamControlFlag);
            if (message.tokenStartFlag != null && Object.hasOwnProperty.call(message, "tokenStartFlag"))
                writer.uint32(/* id 60, wireType 0 =*/480).int32(message.tokenStartFlag);
            if (message.tokenControlFlag != null && Object.hasOwnProperty.call(message, "tokenControlFlag"))
                writer.uint32(/* id 61, wireType 0 =*/488).int32(message.tokenControlFlag);
            if (message.contentFormat != null && Object.hasOwnProperty.call(message, "contentFormat"))
                writer.uint32(/* id 62, wireType 2 =*/498).string(message.contentFormat);
            if (message.enableMaxFeatures != null && Object.hasOwnProperty.call(message, "enableMaxFeatures"))
                writer.uint32(/* id 63, wireType 0 =*/504).int32(message.enableMaxFeatures);
            if (message.sessionTrackingFlag != null && Object.hasOwnProperty.call(message, "sessionTrackingFlag"))
                writer.uint32(/* id 100, wireType 0 =*/800).int32(message.sessionTrackingFlag);
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {StreamUnifiedChatWithToolsRequest.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {StreamUnifiedChatWithToolsRequest.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.StreamUnifiedChatWithToolsRequest.Request.Message.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.instructionFlag = reader.int32();
                        break;
                    }
                case 3: {
                        message.instruction = $root.StreamUnifiedChatWithToolsRequest.Request.Instruction.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.modelFlag = reader.int32();
                        break;
                    }
                case 5: {
                        message.model = $root.StreamUnifiedChatWithToolsRequest.Request.Model.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        if (!(message.wikiTool && message.wikiTool.length))
                            message.wikiTool = [];
                        message.wikiTool.push(reader.string());
                        break;
                    }
                case 8: {
                        message.webTool = reader.string();
                        break;
                    }
                case 13: {
                        message.requestFlag = reader.int32();
                        break;
                    }
                case 15: {
                        message.cursorSetting = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.unifiedMode = reader.int32();
                        break;
                    }
                case 22: {
                        message.thinkingLevel = reader.int32();
                        break;
                    }
                case 23: {
                        message.conversationId = reader.string();
                        break;
                    }
                case 26: {
                        message.metadata = $root.StreamUnifiedChatWithToolsRequest.Request.Metadata.decode(reader, reader.uint32());
                        break;
                    }
                case 27: {
                        message.unknown27 = reader.int32();
                        break;
                    }
                case 29: {
                        message.clientVersion = reader.string();
                        break;
                    }
                case 30: {
                        if (!(message.messageIds && message.messageIds.length))
                            message.messageIds = [];
                        message.messageIds.push($root.StreamUnifiedChatWithToolsRequest.Request.MessageId.decode(reader, reader.uint32()));
                        break;
                    }
                case 35: {
                        message.largeContext = reader.int32();
                        break;
                    }
                case 38: {
                        message.streamMode = reader.int32();
                        break;
                    }
                case 46: {
                        message.chatModeEnum = reader.int32();
                        break;
                    }
                case 47: {
                        message.toolsConfig = reader.string();
                        break;
                    }
                case 48: {
                        message.feedbackFlag = reader.int32();
                        break;
                    }
                case 49: {
                        message.desiredMaxTokens = reader.int32();
                        break;
                    }
                case 51: {
                        message.fileReference = $root.FileReference.decode(reader, reader.uint32());
                        break;
                    }
                case 53: {
                        message.unknown53 = reader.int32();
                        break;
                    }
                case 54: {
                        message.chatMode = reader.string();
                        break;
                    }
                case 58: {
                        message.streamControlFlag = reader.int32();
                        break;
                    }
                case 60: {
                        message.tokenStartFlag = reader.int32();
                        break;
                    }
                case 61: {
                        message.tokenControlFlag = reader.int32();
                        break;
                    }
                case 62: {
                        message.contentFormat = reader.string();
                        break;
                    }
                case 63: {
                        message.enableMaxFeatures = reader.int32();
                        break;
                    }
                case 100: {
                        message.sessionTrackingFlag = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {StreamUnifiedChatWithToolsRequest.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.StreamUnifiedChatWithToolsRequest.Request.Message.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            if (message.instructionFlag != null && message.hasOwnProperty("instructionFlag"))
                if (!$util.isInteger(message.instructionFlag))
                    return "instructionFlag: integer expected";
            if (message.instruction != null && message.hasOwnProperty("instruction")) {
                var error = $root.StreamUnifiedChatWithToolsRequest.Request.Instruction.verify(message.instruction);
                if (error)
                    return "instruction." + error;
            }
            if (message.modelFlag != null && message.hasOwnProperty("modelFlag"))
                if (!$util.isInteger(message.modelFlag))
                    return "modelFlag: integer expected";
            if (message.model != null && message.hasOwnProperty("model")) {
                var error = $root.StreamUnifiedChatWithToolsRequest.Request.Model.verify(message.model);
                if (error)
                    return "model." + error;
            }
            if (message.wikiTool != null && message.hasOwnProperty("wikiTool")) {
                if (!Array.isArray(message.wikiTool))
                    return "wikiTool: array expected";
                for (var i = 0; i < message.wikiTool.length; ++i)
                    if (!$util.isString(message.wikiTool[i]))
                        return "wikiTool: string[] expected";
            }
            if (message.webTool != null && message.hasOwnProperty("webTool"))
                if (!$util.isString(message.webTool))
                    return "webTool: string expected";
            if (message.requestFlag != null && message.hasOwnProperty("requestFlag"))
                if (!$util.isInteger(message.requestFlag))
                    return "requestFlag: integer expected";
            if (message.cursorSetting != null && message.hasOwnProperty("cursorSetting")) {
                var error = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.verify(message.cursorSetting);
                if (error)
                    return "cursorSetting." + error;
            }
            if (message.unifiedMode != null && message.hasOwnProperty("unifiedMode"))
                if (!$util.isInteger(message.unifiedMode))
                    return "unifiedMode: integer expected";
            if (message.thinkingLevel != null && message.hasOwnProperty("thinkingLevel"))
                if (!$util.isInteger(message.thinkingLevel))
                    return "thinkingLevel: integer expected";
            if (message.conversationId != null && message.hasOwnProperty("conversationId"))
                if (!$util.isString(message.conversationId))
                    return "conversationId: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                var error = $root.StreamUnifiedChatWithToolsRequest.Request.Metadata.verify(message.metadata);
                if (error)
                    return "metadata." + error;
            }
            if (message.unknown27 != null && message.hasOwnProperty("unknown27"))
                if (!$util.isInteger(message.unknown27))
                    return "unknown27: integer expected";
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                if (!$util.isString(message.clientVersion))
                    return "clientVersion: string expected";
            if (message.messageIds != null && message.hasOwnProperty("messageIds")) {
                if (!Array.isArray(message.messageIds))
                    return "messageIds: array expected";
                for (var i = 0; i < message.messageIds.length; ++i) {
                    var error = $root.StreamUnifiedChatWithToolsRequest.Request.MessageId.verify(message.messageIds[i]);
                    if (error)
                        return "messageIds." + error;
                }
            }
            if (message.largeContext != null && message.hasOwnProperty("largeContext"))
                if (!$util.isInteger(message.largeContext))
                    return "largeContext: integer expected";
            if (message.streamMode != null && message.hasOwnProperty("streamMode"))
                if (!$util.isInteger(message.streamMode))
                    return "streamMode: integer expected";
            if (message.chatModeEnum != null && message.hasOwnProperty("chatModeEnum"))
                if (!$util.isInteger(message.chatModeEnum))
                    return "chatModeEnum: integer expected";
            if (message.toolsConfig != null && message.hasOwnProperty("toolsConfig"))
                if (!$util.isString(message.toolsConfig))
                    return "toolsConfig: string expected";
            if (message.feedbackFlag != null && message.hasOwnProperty("feedbackFlag"))
                if (!$util.isInteger(message.feedbackFlag))
                    return "feedbackFlag: integer expected";
            if (message.desiredMaxTokens != null && message.hasOwnProperty("desiredMaxTokens"))
                if (!$util.isInteger(message.desiredMaxTokens))
                    return "desiredMaxTokens: integer expected";
            if (message.fileReference != null && message.hasOwnProperty("fileReference")) {
                var error = $root.FileReference.verify(message.fileReference);
                if (error)
                    return "fileReference." + error;
            }
            if (message.unknown53 != null && message.hasOwnProperty("unknown53"))
                if (!$util.isInteger(message.unknown53))
                    return "unknown53: integer expected";
            if (message.chatMode != null && message.hasOwnProperty("chatMode"))
                if (!$util.isString(message.chatMode))
                    return "chatMode: string expected";
            if (message.streamControlFlag != null && message.hasOwnProperty("streamControlFlag"))
                if (!$util.isInteger(message.streamControlFlag))
                    return "streamControlFlag: integer expected";
            if (message.tokenStartFlag != null && message.hasOwnProperty("tokenStartFlag"))
                if (!$util.isInteger(message.tokenStartFlag))
                    return "tokenStartFlag: integer expected";
            if (message.tokenControlFlag != null && message.hasOwnProperty("tokenControlFlag"))
                if (!$util.isInteger(message.tokenControlFlag))
                    return "tokenControlFlag: integer expected";
            if (message.contentFormat != null && message.hasOwnProperty("contentFormat"))
                if (!$util.isString(message.contentFormat))
                    return "contentFormat: string expected";
            if (message.enableMaxFeatures != null && message.hasOwnProperty("enableMaxFeatures"))
                if (!$util.isInteger(message.enableMaxFeatures))
                    return "enableMaxFeatures: integer expected";
            if (message.sessionTrackingFlag != null && message.hasOwnProperty("sessionTrackingFlag"))
                if (!$util.isInteger(message.sessionTrackingFlag))
                    return "sessionTrackingFlag: integer expected";
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {StreamUnifiedChatWithToolsRequest.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request)
                return object;
            var message = new $root.StreamUnifiedChatWithToolsRequest.Request();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.messages: object expected");
                    message.messages[i] = $root.StreamUnifiedChatWithToolsRequest.Request.Message.fromObject(object.messages[i]);
                }
            }
            if (object.instructionFlag != null)
                message.instructionFlag = object.instructionFlag | 0;
            if (object.instruction != null) {
                if (typeof object.instruction !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.instruction: object expected");
                message.instruction = $root.StreamUnifiedChatWithToolsRequest.Request.Instruction.fromObject(object.instruction);
            }
            if (object.modelFlag != null)
                message.modelFlag = object.modelFlag | 0;
            if (object.model != null) {
                if (typeof object.model !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.model: object expected");
                message.model = $root.StreamUnifiedChatWithToolsRequest.Request.Model.fromObject(object.model);
            }
            if (object.wikiTool) {
                if (!Array.isArray(object.wikiTool))
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.wikiTool: array expected");
                message.wikiTool = [];
                for (var i = 0; i < object.wikiTool.length; ++i)
                    message.wikiTool[i] = String(object.wikiTool[i]);
            }
            if (object.webTool != null)
                message.webTool = String(object.webTool);
            if (object.requestFlag != null)
                message.requestFlag = object.requestFlag | 0;
            if (object.cursorSetting != null) {
                if (typeof object.cursorSetting !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.cursorSetting: object expected");
                message.cursorSetting = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.fromObject(object.cursorSetting);
            }
            if (object.unifiedMode != null)
                message.unifiedMode = object.unifiedMode | 0;
            if (object.thinkingLevel != null)
                message.thinkingLevel = object.thinkingLevel | 0;
            if (object.conversationId != null)
                message.conversationId = String(object.conversationId);
            if (object.metadata != null) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.metadata: object expected");
                message.metadata = $root.StreamUnifiedChatWithToolsRequest.Request.Metadata.fromObject(object.metadata);
            }
            if (object.unknown27 != null)
                message.unknown27 = object.unknown27 | 0;
            if (object.clientVersion != null)
                message.clientVersion = String(object.clientVersion);
            if (object.messageIds) {
                if (!Array.isArray(object.messageIds))
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.messageIds: array expected");
                message.messageIds = [];
                for (var i = 0; i < object.messageIds.length; ++i) {
                    if (typeof object.messageIds[i] !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.messageIds: object expected");
                    message.messageIds[i] = $root.StreamUnifiedChatWithToolsRequest.Request.MessageId.fromObject(object.messageIds[i]);
                }
            }
            if (object.largeContext != null)
                message.largeContext = object.largeContext | 0;
            if (object.streamMode != null)
                message.streamMode = object.streamMode | 0;
            if (object.chatModeEnum != null)
                message.chatModeEnum = object.chatModeEnum | 0;
            if (object.toolsConfig != null)
                message.toolsConfig = String(object.toolsConfig);
            if (object.feedbackFlag != null)
                message.feedbackFlag = object.feedbackFlag | 0;
            if (object.desiredMaxTokens != null)
                message.desiredMaxTokens = object.desiredMaxTokens | 0;
            if (object.fileReference != null) {
                if (typeof object.fileReference !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.fileReference: object expected");
                message.fileReference = $root.FileReference.fromObject(object.fileReference);
            }
            if (object.unknown53 != null)
                message.unknown53 = object.unknown53 | 0;
            if (object.chatMode != null)
                message.chatMode = String(object.chatMode);
            if (object.streamControlFlag != null)
                message.streamControlFlag = object.streamControlFlag | 0;
            if (object.tokenStartFlag != null)
                message.tokenStartFlag = object.tokenStartFlag | 0;
            if (object.tokenControlFlag != null)
                message.tokenControlFlag = object.tokenControlFlag | 0;
            if (object.contentFormat != null)
                message.contentFormat = String(object.contentFormat);
            if (object.enableMaxFeatures != null)
                message.enableMaxFeatures = object.enableMaxFeatures | 0;
            if (object.sessionTrackingFlag != null)
                message.sessionTrackingFlag = object.sessionTrackingFlag | 0;
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {StreamUnifiedChatWithToolsRequest.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.messages = [];
                object.wikiTool = [];
                object.messageIds = [];
            }
            if (options.defaults) {
                object.instructionFlag = 0;
                object.instruction = null;
                object.modelFlag = 0;
                object.model = null;
                object.webTool = "";
                object.requestFlag = 0;
                object.cursorSetting = null;
                object.unifiedMode = 0;
                object.thinkingLevel = 0;
                object.conversationId = "";
                object.metadata = null;
                object.unknown27 = 0;
                object.clientVersion = "";
                object.largeContext = 0;
                object.streamMode = 0;
                object.chatModeEnum = 0;
                object.toolsConfig = "";
                object.feedbackFlag = 0;
                object.desiredMaxTokens = 0;
                object.fileReference = null;
                object.unknown53 = 0;
                object.chatMode = "";
                object.streamControlFlag = 0;
                object.tokenStartFlag = 0;
                object.tokenControlFlag = 0;
                object.contentFormat = "";
                object.enableMaxFeatures = 0;
                object.sessionTrackingFlag = 0;
            }
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.StreamUnifiedChatWithToolsRequest.Request.Message.toObject(message.messages[j], options);
            }
            if (message.instructionFlag != null && message.hasOwnProperty("instructionFlag"))
                object.instructionFlag = message.instructionFlag;
            if (message.instruction != null && message.hasOwnProperty("instruction"))
                object.instruction = $root.StreamUnifiedChatWithToolsRequest.Request.Instruction.toObject(message.instruction, options);
            if (message.modelFlag != null && message.hasOwnProperty("modelFlag"))
                object.modelFlag = message.modelFlag;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = $root.StreamUnifiedChatWithToolsRequest.Request.Model.toObject(message.model, options);
            if (message.wikiTool && message.wikiTool.length) {
                object.wikiTool = [];
                for (var j = 0; j < message.wikiTool.length; ++j)
                    object.wikiTool[j] = message.wikiTool[j];
            }
            if (message.webTool != null && message.hasOwnProperty("webTool"))
                object.webTool = message.webTool;
            if (message.requestFlag != null && message.hasOwnProperty("requestFlag"))
                object.requestFlag = message.requestFlag;
            if (message.cursorSetting != null && message.hasOwnProperty("cursorSetting"))
                object.cursorSetting = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.toObject(message.cursorSetting, options);
            if (message.unifiedMode != null && message.hasOwnProperty("unifiedMode"))
                object.unifiedMode = message.unifiedMode;
            if (message.thinkingLevel != null && message.hasOwnProperty("thinkingLevel"))
                object.thinkingLevel = message.thinkingLevel;
            if (message.conversationId != null && message.hasOwnProperty("conversationId"))
                object.conversationId = message.conversationId;
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                object.metadata = $root.StreamUnifiedChatWithToolsRequest.Request.Metadata.toObject(message.metadata, options);
            if (message.unknown27 != null && message.hasOwnProperty("unknown27"))
                object.unknown27 = message.unknown27;
            if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                object.clientVersion = message.clientVersion;
            if (message.messageIds && message.messageIds.length) {
                object.messageIds = [];
                for (var j = 0; j < message.messageIds.length; ++j)
                    object.messageIds[j] = $root.StreamUnifiedChatWithToolsRequest.Request.MessageId.toObject(message.messageIds[j], options);
            }
            if (message.largeContext != null && message.hasOwnProperty("largeContext"))
                object.largeContext = message.largeContext;
            if (message.streamMode != null && message.hasOwnProperty("streamMode"))
                object.streamMode = message.streamMode;
            if (message.chatModeEnum != null && message.hasOwnProperty("chatModeEnum"))
                object.chatModeEnum = message.chatModeEnum;
            if (message.toolsConfig != null && message.hasOwnProperty("toolsConfig"))
                object.toolsConfig = message.toolsConfig;
            if (message.feedbackFlag != null && message.hasOwnProperty("feedbackFlag"))
                object.feedbackFlag = message.feedbackFlag;
            if (message.desiredMaxTokens != null && message.hasOwnProperty("desiredMaxTokens"))
                object.desiredMaxTokens = message.desiredMaxTokens;
            if (message.fileReference != null && message.hasOwnProperty("fileReference"))
                object.fileReference = $root.FileReference.toObject(message.fileReference, options);
            if (message.unknown53 != null && message.hasOwnProperty("unknown53"))
                object.unknown53 = message.unknown53;
            if (message.chatMode != null && message.hasOwnProperty("chatMode"))
                object.chatMode = message.chatMode;
            if (message.streamControlFlag != null && message.hasOwnProperty("streamControlFlag"))
                object.streamControlFlag = message.streamControlFlag;
            if (message.tokenStartFlag != null && message.hasOwnProperty("tokenStartFlag"))
                object.tokenStartFlag = message.tokenStartFlag;
            if (message.tokenControlFlag != null && message.hasOwnProperty("tokenControlFlag"))
                object.tokenControlFlag = message.tokenControlFlag;
            if (message.contentFormat != null && message.hasOwnProperty("contentFormat"))
                object.contentFormat = message.contentFormat;
            if (message.enableMaxFeatures != null && message.hasOwnProperty("enableMaxFeatures"))
                object.enableMaxFeatures = message.enableMaxFeatures;
            if (message.sessionTrackingFlag != null && message.hasOwnProperty("sessionTrackingFlag"))
                object.sessionTrackingFlag = message.sessionTrackingFlag;
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Request
         * @function getTypeUrl
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request";
        };

        Request.Message = (function() {

            /**
             * Properties of a Message.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @interface IMessage
             * @property {string|null} [content] Message content
             * @property {number|null} [role] Message role
             * @property {StreamUnifiedChatWithToolsRequest.Request.Message.IImage|null} [image] Message image
             * @property {string|null} [messageId] Message messageId
             * @property {Array.<string>|null} [fileReferences] Message fileReferences
             * @property {string|null} [clientVersion] Message clientVersion
             * @property {string|null} [summaryId] Message summaryId
             * @property {IMessageSummary|null} [summary] Message summary
             * @property {IMessageThinking|null} [thinking] Message thinking
             * @property {number|null} [chatModeEnum] Message chatModeEnum
             * @property {number|null} [fileDescriptor] Message fileDescriptor
             * @property {number|null} [unknown63] Message unknown63
             */

            /**
             * Constructs a new Message.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @classdesc Represents a Message.
             * @implements IMessage
             * @constructor
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessage=} [properties] Properties to set
             */
            function Message(properties) {
                this.fileReferences = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Message content.
             * @member {string} content
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.content = "";

            /**
             * Message role.
             * @member {number} role
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.role = 0;

            /**
             * Message image.
             * @member {StreamUnifiedChatWithToolsRequest.Request.Message.IImage|null|undefined} image
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.image = null;

            /**
             * Message messageId.
             * @member {string} messageId
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.messageId = "";

            /**
             * Message fileReferences.
             * @member {Array.<string>} fileReferences
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.fileReferences = $util.emptyArray;

            /**
             * Message clientVersion.
             * @member {string} clientVersion
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.clientVersion = "";

            /**
             * Message summaryId.
             * @member {string} summaryId
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.summaryId = "";

            /**
             * Message summary.
             * @member {IMessageSummary|null|undefined} summary
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.summary = null;

            /**
             * Message thinking.
             * @member {IMessageThinking|null|undefined} thinking
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.thinking = null;

            /**
             * Message chatModeEnum.
             * @member {number} chatModeEnum
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.chatModeEnum = 0;

            /**
             * Message fileDescriptor.
             * @member {number} fileDescriptor
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.fileDescriptor = 0;

            /**
             * Message unknown63.
             * @member {number} unknown63
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.unknown63 = 0;

            /**
             * Creates a new Message instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessage=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Message} Message instance
             */
            Message.create = function create(properties) {
                return new Message(properties);
            };

            /**
             * Encodes the specified Message message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Message.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.role);
                if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                    $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.encode(message.image, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.messageId);
                if (message.fileReferences != null && message.fileReferences.length)
                    for (var i = 0; i < message.fileReferences.length; ++i)
                        writer.uint32(/* id 17, wireType 2 =*/138).string(message.fileReferences[i]);
                if (message.clientVersion != null && Object.hasOwnProperty.call(message, "clientVersion"))
                    writer.uint32(/* id 29, wireType 2 =*/234).string(message.clientVersion);
                if (message.summaryId != null && Object.hasOwnProperty.call(message, "summaryId"))
                    writer.uint32(/* id 32, wireType 2 =*/258).string(message.summaryId);
                if (message.summary != null && Object.hasOwnProperty.call(message, "summary"))
                    $root.MessageSummary.encode(message.summary, writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
                if (message.thinking != null && Object.hasOwnProperty.call(message, "thinking"))
                    $root.MessageThinking.encode(message.thinking, writer.uint32(/* id 45, wireType 2 =*/362).fork()).ldelim();
                if (message.chatModeEnum != null && Object.hasOwnProperty.call(message, "chatModeEnum"))
                    writer.uint32(/* id 47, wireType 0 =*/376).int32(message.chatModeEnum);
                if (message.fileDescriptor != null && Object.hasOwnProperty.call(message, "fileDescriptor"))
                    writer.uint32(/* id 50, wireType 0 =*/400).int32(message.fileDescriptor);
                if (message.unknown63 != null && Object.hasOwnProperty.call(message, "unknown63"))
                    writer.uint32(/* id 63, wireType 0 =*/504).int32(message.unknown63);
                return writer;
            };

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Message.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.Message();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.content = reader.string();
                            break;
                        }
                    case 2: {
                            message.role = reader.int32();
                            break;
                        }
                    case 10: {
                            message.image = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.decode(reader, reader.uint32());
                            break;
                        }
                    case 13: {
                            message.messageId = reader.string();
                            break;
                        }
                    case 17: {
                            if (!(message.fileReferences && message.fileReferences.length))
                                message.fileReferences = [];
                            message.fileReferences.push(reader.string());
                            break;
                        }
                    case 29: {
                            message.clientVersion = reader.string();
                            break;
                        }
                    case 32: {
                            message.summaryId = reader.string();
                            break;
                        }
                    case 39: {
                            message.summary = $root.MessageSummary.decode(reader, reader.uint32());
                            break;
                        }
                    case 45: {
                            message.thinking = $root.MessageThinking.decode(reader, reader.uint32());
                            break;
                        }
                    case 47: {
                            message.chatModeEnum = reader.int32();
                            break;
                        }
                    case 50: {
                            message.fileDescriptor = reader.int32();
                            break;
                        }
                    case 63: {
                            message.unknown63 = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Message message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Message.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.role != null && message.hasOwnProperty("role"))
                    if (!$util.isInteger(message.role))
                        return "role: integer expected";
                if (message.image != null && message.hasOwnProperty("image")) {
                    var error = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.verify(message.image);
                    if (error)
                        return "image." + error;
                }
                if (message.messageId != null && message.hasOwnProperty("messageId"))
                    if (!$util.isString(message.messageId))
                        return "messageId: string expected";
                if (message.fileReferences != null && message.hasOwnProperty("fileReferences")) {
                    if (!Array.isArray(message.fileReferences))
                        return "fileReferences: array expected";
                    for (var i = 0; i < message.fileReferences.length; ++i)
                        if (!$util.isString(message.fileReferences[i]))
                            return "fileReferences: string[] expected";
                }
                if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                    if (!$util.isString(message.clientVersion))
                        return "clientVersion: string expected";
                if (message.summaryId != null && message.hasOwnProperty("summaryId"))
                    if (!$util.isString(message.summaryId))
                        return "summaryId: string expected";
                if (message.summary != null && message.hasOwnProperty("summary")) {
                    var error = $root.MessageSummary.verify(message.summary);
                    if (error)
                        return "summary." + error;
                }
                if (message.thinking != null && message.hasOwnProperty("thinking")) {
                    var error = $root.MessageThinking.verify(message.thinking);
                    if (error)
                        return "thinking." + error;
                }
                if (message.chatModeEnum != null && message.hasOwnProperty("chatModeEnum"))
                    if (!$util.isInteger(message.chatModeEnum))
                        return "chatModeEnum: integer expected";
                if (message.fileDescriptor != null && message.hasOwnProperty("fileDescriptor"))
                    if (!$util.isInteger(message.fileDescriptor))
                        return "fileDescriptor: integer expected";
                if (message.unknown63 != null && message.hasOwnProperty("unknown63"))
                    if (!$util.isInteger(message.unknown63))
                        return "unknown63: integer expected";
                return null;
            };

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Message} Message
             */
            Message.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.Message)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsRequest.Request.Message();
                if (object.content != null)
                    message.content = String(object.content);
                if (object.role != null)
                    message.role = object.role | 0;
                if (object.image != null) {
                    if (typeof object.image !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.Message.image: object expected");
                    message.image = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.fromObject(object.image);
                }
                if (object.messageId != null)
                    message.messageId = String(object.messageId);
                if (object.fileReferences) {
                    if (!Array.isArray(object.fileReferences))
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.Message.fileReferences: array expected");
                    message.fileReferences = [];
                    for (var i = 0; i < object.fileReferences.length; ++i)
                        message.fileReferences[i] = String(object.fileReferences[i]);
                }
                if (object.clientVersion != null)
                    message.clientVersion = String(object.clientVersion);
                if (object.summaryId != null)
                    message.summaryId = String(object.summaryId);
                if (object.summary != null) {
                    if (typeof object.summary !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.Message.summary: object expected");
                    message.summary = $root.MessageSummary.fromObject(object.summary);
                }
                if (object.thinking != null) {
                    if (typeof object.thinking !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.Message.thinking: object expected");
                    message.thinking = $root.MessageThinking.fromObject(object.thinking);
                }
                if (object.chatModeEnum != null)
                    message.chatModeEnum = object.chatModeEnum | 0;
                if (object.fileDescriptor != null)
                    message.fileDescriptor = object.fileDescriptor | 0;
                if (object.unknown63 != null)
                    message.unknown63 = object.unknown63 | 0;
                return message;
            };

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.Message} message Message
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Message.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.fileReferences = [];
                if (options.defaults) {
                    object.content = "";
                    object.role = 0;
                    object.image = null;
                    object.messageId = "";
                    object.clientVersion = "";
                    object.summaryId = "";
                    object.summary = null;
                    object.thinking = null;
                    object.chatModeEnum = 0;
                    object.fileDescriptor = 0;
                    object.unknown63 = 0;
                }
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.role != null && message.hasOwnProperty("role"))
                    object.role = message.role;
                if (message.image != null && message.hasOwnProperty("image"))
                    object.image = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.toObject(message.image, options);
                if (message.messageId != null && message.hasOwnProperty("messageId"))
                    object.messageId = message.messageId;
                if (message.fileReferences && message.fileReferences.length) {
                    object.fileReferences = [];
                    for (var j = 0; j < message.fileReferences.length; ++j)
                        object.fileReferences[j] = message.fileReferences[j];
                }
                if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                    object.clientVersion = message.clientVersion;
                if (message.summaryId != null && message.hasOwnProperty("summaryId"))
                    object.summaryId = message.summaryId;
                if (message.summary != null && message.hasOwnProperty("summary"))
                    object.summary = $root.MessageSummary.toObject(message.summary, options);
                if (message.thinking != null && message.hasOwnProperty("thinking"))
                    object.thinking = $root.MessageThinking.toObject(message.thinking, options);
                if (message.chatModeEnum != null && message.hasOwnProperty("chatModeEnum"))
                    object.chatModeEnum = message.chatModeEnum;
                if (message.fileDescriptor != null && message.hasOwnProperty("fileDescriptor"))
                    object.fileDescriptor = message.fileDescriptor;
                if (message.unknown63 != null && message.hasOwnProperty("unknown63"))
                    object.unknown63 = message.unknown63;
                return object;
            };

            /**
             * Converts this Message to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Message.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Message
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.Message";
            };

            Message.Image = (function() {

                /**
                 * Properties of an Image.
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
                 * @interface IImage
                 * @property {Uint8Array|null} [data] Image data
                 * @property {StreamUnifiedChatWithToolsRequest.Request.Message.Image.IMetadata|null} [metadata] Image metadata
                 */

                /**
                 * Constructs a new Image.
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
                 * @classdesc Represents an Image.
                 * @implements IImage
                 * @constructor
                 * @param {StreamUnifiedChatWithToolsRequest.Request.Message.IImage=} [properties] Properties to set
                 */
                function Image(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Image data.
                 * @member {Uint8Array} data
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @instance
                 */
                Image.prototype.data = $util.newBuffer([]);

                /**
                 * Image metadata.
                 * @member {StreamUnifiedChatWithToolsRequest.Request.Message.Image.IMetadata|null|undefined} metadata
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @instance
                 */
                Image.prototype.metadata = null;

                /**
                 * Creates a new Image instance using the specified properties.
                 * @function create
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.Message.IImage=} [properties] Properties to set
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image} Image instance
                 */
                Image.create = function create(properties) {
                    return new Image(properties);
                };

                /**
                 * Encodes the specified Image message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Message.Image.verify|verify} messages.
                 * @function encode
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.Message.IImage} message Image message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Image.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.encode(message.metadata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Image message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Message.Image.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.Message.IImage} message Image message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Image.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Image message from the specified reader or buffer.
                 * @function decode
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image} Image
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Image.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.data = reader.bytes();
                                break;
                            }
                        case 2: {
                                message.metadata = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Image message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image} Image
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Image.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Image message.
                 * @function verify
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Image.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.data != null && message.hasOwnProperty("data"))
                        if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                            return "data: buffer expected";
                    if (message.metadata != null && message.hasOwnProperty("metadata")) {
                        var error = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.verify(message.metadata);
                        if (error)
                            return "metadata." + error;
                    }
                    return null;
                };

                /**
                 * Creates an Image message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image} Image
                 */
                Image.fromObject = function fromObject(object) {
                    if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image)
                        return object;
                    var message = new $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image();
                    if (object.data != null)
                        if (typeof object.data === "string")
                            $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                        else if (object.data.length >= 0)
                            message.data = object.data;
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.Message.Image.metadata: object expected");
                        message.metadata = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.fromObject(object.metadata);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Image message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.Message.Image} message Image
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Image.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.data = "";
                        else {
                            object.data = [];
                            if (options.bytes !== Array)
                                object.data = $util.newBuffer(object.data);
                        }
                        object.metadata = null;
                    }
                    if (message.data != null && message.hasOwnProperty("data"))
                        object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.toObject(message.metadata, options);
                    return object;
                };

                /**
                 * Converts this Image to JSON.
                 * @function toJSON
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Image.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Image
                 * @function getTypeUrl
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Image.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.Message.Image";
                };

                Image.Metadata = (function() {

                    /**
                     * Properties of a Metadata.
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                     * @interface IMetadata
                     * @property {number|null} [width] Metadata width
                     * @property {number|null} [height] Metadata height
                     */

                    /**
                     * Constructs a new Metadata.
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                     * @classdesc Represents a Metadata.
                     * @implements IMetadata
                     * @constructor
                     * @param {StreamUnifiedChatWithToolsRequest.Request.Message.Image.IMetadata=} [properties] Properties to set
                     */
                    function Metadata(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Metadata width.
                     * @member {number} width
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @instance
                     */
                    Metadata.prototype.width = 0;

                    /**
                     * Metadata height.
                     * @member {number} height
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @instance
                     */
                    Metadata.prototype.height = 0;

                    /**
                     * Creates a new Metadata instance using the specified properties.
                     * @function create
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {StreamUnifiedChatWithToolsRequest.Request.Message.Image.IMetadata=} [properties] Properties to set
                     * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata} Metadata instance
                     */
                    Metadata.create = function create(properties) {
                        return new Metadata(properties);
                    };

                    /**
                     * Encodes the specified Metadata message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.verify|verify} messages.
                     * @function encode
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {StreamUnifiedChatWithToolsRequest.Request.Message.Image.IMetadata} message Metadata message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Metadata.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.width);
                        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
                        return writer;
                    };

                    /**
                     * Encodes the specified Metadata message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {StreamUnifiedChatWithToolsRequest.Request.Message.Image.IMetadata} message Metadata message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Metadata.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Metadata message from the specified reader or buffer.
                     * @function decode
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata} Metadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Metadata.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.width = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.height = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Metadata message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata} Metadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Metadata.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Metadata message.
                     * @function verify
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Metadata.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.width != null && message.hasOwnProperty("width"))
                            if (!$util.isInteger(message.width))
                                return "width: integer expected";
                        if (message.height != null && message.hasOwnProperty("height"))
                            if (!$util.isInteger(message.height))
                                return "height: integer expected";
                        return null;
                    };

                    /**
                     * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata} Metadata
                     */
                    Metadata.fromObject = function fromObject(object) {
                        if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata)
                            return object;
                        var message = new $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata();
                        if (object.width != null)
                            message.width = object.width | 0;
                        if (object.height != null)
                            message.height = object.height | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Metadata message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata} message Metadata
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Metadata.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.width = 0;
                            object.height = 0;
                        }
                        if (message.width != null && message.hasOwnProperty("width"))
                            object.width = message.width;
                        if (message.height != null && message.hasOwnProperty("height"))
                            object.height = message.height;
                        return object;
                    };

                    /**
                     * Converts this Metadata to JSON.
                     * @function toJSON
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Metadata.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Metadata
                     * @function getTypeUrl
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Metadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata";
                    };

                    return Metadata;
                })();

                return Image;
            })();

            return Message;
        })();

        Request.Instruction = (function() {

            /**
             * Properties of an Instruction.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @interface IInstruction
             * @property {string|null} [instruction] Instruction instruction
             */

            /**
             * Constructs a new Instruction.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @classdesc Represents an Instruction.
             * @implements IInstruction
             * @constructor
             * @param {StreamUnifiedChatWithToolsRequest.Request.IInstruction=} [properties] Properties to set
             */
            function Instruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Instruction instruction.
             * @member {string} instruction
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @instance
             */
            Instruction.prototype.instruction = "";

            /**
             * Creates a new Instruction instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IInstruction=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Instruction} Instruction instance
             */
            Instruction.create = function create(properties) {
                return new Instruction(properties);
            };

            /**
             * Encodes the specified Instruction message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Instruction.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IInstruction} message Instruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Instruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.instruction != null && Object.hasOwnProperty.call(message, "instruction"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.instruction);
                return writer;
            };

            /**
             * Encodes the specified Instruction message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Instruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IInstruction} message Instruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Instruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Instruction message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Instruction} Instruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Instruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.Instruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.instruction = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Instruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Instruction} Instruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Instruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Instruction message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Instruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.instruction != null && message.hasOwnProperty("instruction"))
                    if (!$util.isString(message.instruction))
                        return "instruction: string expected";
                return null;
            };

            /**
             * Creates an Instruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Instruction} Instruction
             */
            Instruction.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.Instruction)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsRequest.Request.Instruction();
                if (object.instruction != null)
                    message.instruction = String(object.instruction);
                return message;
            };

            /**
             * Creates a plain object from an Instruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.Instruction} message Instruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Instruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.instruction = "";
                if (message.instruction != null && message.hasOwnProperty("instruction"))
                    object.instruction = message.instruction;
                return object;
            };

            /**
             * Converts this Instruction to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Instruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Instruction
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Instruction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.Instruction";
            };

            return Instruction;
        })();

        Request.Model = (function() {

            /**
             * Properties of a Model.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @interface IModel
             * @property {string|null} [name] Model name
             * @property {Uint8Array|null} [empty] Model empty
             */

            /**
             * Constructs a new Model.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @classdesc Represents a Model.
             * @implements IModel
             * @constructor
             * @param {StreamUnifiedChatWithToolsRequest.Request.IModel=} [properties] Properties to set
             */
            function Model(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Model name.
             * @member {string} name
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @instance
             */
            Model.prototype.name = "";

            /**
             * Model empty.
             * @member {Uint8Array} empty
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @instance
             */
            Model.prototype.empty = $util.newBuffer([]);

            /**
             * Creates a new Model instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IModel=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Model} Model instance
             */
            Model.create = function create(properties) {
                return new Model(properties);
            };

            /**
             * Encodes the specified Model message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Model.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IModel} message Model message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Model.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.empty);
                return writer;
            };

            /**
             * Encodes the specified Model message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Model.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IModel} message Model message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Model.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Model message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Model} Model
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Model.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.Model();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 4: {
                            message.empty = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Model message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Model} Model
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Model.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Model message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Model.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.empty != null && message.hasOwnProperty("empty"))
                    if (!(message.empty && typeof message.empty.length === "number" || $util.isString(message.empty)))
                        return "empty: buffer expected";
                return null;
            };

            /**
             * Creates a Model message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Model} Model
             */
            Model.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.Model)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsRequest.Request.Model();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.empty != null)
                    if (typeof object.empty === "string")
                        $util.base64.decode(object.empty, message.empty = $util.newBuffer($util.base64.length(object.empty)), 0);
                    else if (object.empty.length >= 0)
                        message.empty = object.empty;
                return message;
            };

            /**
             * Creates a plain object from a Model message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.Model} message Model
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Model.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    if (options.bytes === String)
                        object.empty = "";
                    else {
                        object.empty = [];
                        if (options.bytes !== Array)
                            object.empty = $util.newBuffer(object.empty);
                    }
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.empty != null && message.hasOwnProperty("empty"))
                    object.empty = options.bytes === String ? $util.base64.encode(message.empty, 0, message.empty.length) : options.bytes === Array ? Array.prototype.slice.call(message.empty) : message.empty;
                return object;
            };

            /**
             * Converts this Model to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Model.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Model
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Model.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.Model";
            };

            return Model;
        })();

        Request.CursorSetting = (function() {

            /**
             * Properties of a CursorSetting.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @interface ICursorSetting
             * @property {string|null} [name] CursorSetting name
             * @property {Uint8Array|null} [settingsData] CursorSetting settingsData
             * @property {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.IClientSettings|null} [clientSettings] CursorSetting clientSettings
             * @property {number|null} [settingsFlag] CursorSetting settingsFlag
             * @property {number|null} [settingsMode] CursorSetting settingsMode
             */

            /**
             * Constructs a new CursorSetting.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @classdesc Represents a CursorSetting.
             * @implements ICursorSetting
             * @constructor
             * @param {StreamUnifiedChatWithToolsRequest.Request.ICursorSetting=} [properties] Properties to set
             */
            function CursorSetting(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CursorSetting name.
             * @member {string} name
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @instance
             */
            CursorSetting.prototype.name = "";

            /**
             * CursorSetting settingsData.
             * @member {Uint8Array} settingsData
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @instance
             */
            CursorSetting.prototype.settingsData = $util.newBuffer([]);

            /**
             * CursorSetting clientSettings.
             * @member {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.IClientSettings|null|undefined} clientSettings
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @instance
             */
            CursorSetting.prototype.clientSettings = null;

            /**
             * CursorSetting settingsFlag.
             * @member {number} settingsFlag
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @instance
             */
            CursorSetting.prototype.settingsFlag = 0;

            /**
             * CursorSetting settingsMode.
             * @member {number} settingsMode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @instance
             */
            CursorSetting.prototype.settingsMode = 0;

            /**
             * Creates a new CursorSetting instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.ICursorSetting=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting} CursorSetting instance
             */
            CursorSetting.create = function create(properties) {
                return new CursorSetting(properties);
            };

            /**
             * Encodes the specified CursorSetting message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.CursorSetting.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.ICursorSetting} message CursorSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CursorSetting.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.settingsData != null && Object.hasOwnProperty.call(message, "settingsData"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.settingsData);
                if (message.clientSettings != null && Object.hasOwnProperty.call(message, "clientSettings"))
                    $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings.encode(message.clientSettings, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.settingsFlag != null && Object.hasOwnProperty.call(message, "settingsFlag"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.settingsFlag);
                if (message.settingsMode != null && Object.hasOwnProperty.call(message, "settingsMode"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.settingsMode);
                return writer;
            };

            /**
             * Encodes the specified CursorSetting message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.CursorSetting.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.ICursorSetting} message CursorSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CursorSetting.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CursorSetting message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting} CursorSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CursorSetting.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.settingsData = reader.bytes();
                            break;
                        }
                    case 6: {
                            message.clientSettings = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.settingsFlag = reader.int32();
                            break;
                        }
                    case 9: {
                            message.settingsMode = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CursorSetting message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting} CursorSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CursorSetting.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CursorSetting message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CursorSetting.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.settingsData != null && message.hasOwnProperty("settingsData"))
                    if (!(message.settingsData && typeof message.settingsData.length === "number" || $util.isString(message.settingsData)))
                        return "settingsData: buffer expected";
                if (message.clientSettings != null && message.hasOwnProperty("clientSettings")) {
                    var error = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings.verify(message.clientSettings);
                    if (error)
                        return "clientSettings." + error;
                }
                if (message.settingsFlag != null && message.hasOwnProperty("settingsFlag"))
                    if (!$util.isInteger(message.settingsFlag))
                        return "settingsFlag: integer expected";
                if (message.settingsMode != null && message.hasOwnProperty("settingsMode"))
                    if (!$util.isInteger(message.settingsMode))
                        return "settingsMode: integer expected";
                return null;
            };

            /**
             * Creates a CursorSetting message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting} CursorSetting
             */
            CursorSetting.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.settingsData != null)
                    if (typeof object.settingsData === "string")
                        $util.base64.decode(object.settingsData, message.settingsData = $util.newBuffer($util.base64.length(object.settingsData)), 0);
                    else if (object.settingsData.length >= 0)
                        message.settingsData = object.settingsData;
                if (object.clientSettings != null) {
                    if (typeof object.clientSettings !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.CursorSetting.clientSettings: object expected");
                    message.clientSettings = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings.fromObject(object.clientSettings);
                }
                if (object.settingsFlag != null)
                    message.settingsFlag = object.settingsFlag | 0;
                if (object.settingsMode != null)
                    message.settingsMode = object.settingsMode | 0;
                return message;
            };

            /**
             * Creates a plain object from a CursorSetting message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.CursorSetting} message CursorSetting
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CursorSetting.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    if (options.bytes === String)
                        object.settingsData = "";
                    else {
                        object.settingsData = [];
                        if (options.bytes !== Array)
                            object.settingsData = $util.newBuffer(object.settingsData);
                    }
                    object.clientSettings = null;
                    object.settingsFlag = 0;
                    object.settingsMode = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.settingsData != null && message.hasOwnProperty("settingsData"))
                    object.settingsData = options.bytes === String ? $util.base64.encode(message.settingsData, 0, message.settingsData.length) : options.bytes === Array ? Array.prototype.slice.call(message.settingsData) : message.settingsData;
                if (message.clientSettings != null && message.hasOwnProperty("clientSettings"))
                    object.clientSettings = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings.toObject(message.clientSettings, options);
                if (message.settingsFlag != null && message.hasOwnProperty("settingsFlag"))
                    object.settingsFlag = message.settingsFlag;
                if (message.settingsMode != null && message.hasOwnProperty("settingsMode"))
                    object.settingsMode = message.settingsMode;
                return object;
            };

            /**
             * Converts this CursorSetting to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CursorSetting.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CursorSetting
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CursorSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.CursorSetting";
            };

            CursorSetting.ClientSettings = (function() {

                /**
                 * Properties of a ClientSettings.
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
                 * @interface IClientSettings
                 * @property {Uint8Array|null} [settings] ClientSettings settings
                 * @property {Uint8Array|null} [configuration] ClientSettings configuration
                 */

                /**
                 * Constructs a new ClientSettings.
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
                 * @classdesc Represents a ClientSettings.
                 * @implements IClientSettings
                 * @constructor
                 * @param {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.IClientSettings=} [properties] Properties to set
                 */
                function ClientSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ClientSettings settings.
                 * @member {Uint8Array} settings
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings
                 * @instance
                 */
                ClientSettings.prototype.settings = $util.newBuffer([]);

                /**
                 * ClientSettings configuration.
                 * @member {Uint8Array} configuration
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings
                 * @instance
                 */
                ClientSettings.prototype.configuration = $util.newBuffer([]);

                /**
                 * Creates a new ClientSettings instance using the specified properties.
                 * @function create
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.IClientSettings=} [properties] Properties to set
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings} ClientSettings instance
                 */
                ClientSettings.create = function create(properties) {
                    return new ClientSettings(properties);
                };

                /**
                 * Encodes the specified ClientSettings message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings.verify|verify} messages.
                 * @function encode
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.IClientSettings} message ClientSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.settings);
                    if (message.configuration != null && Object.hasOwnProperty.call(message, "configuration"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.configuration);
                    return writer;
                };

                /**
                 * Encodes the specified ClientSettings message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.IClientSettings} message ClientSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ClientSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings} ClientSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientSettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.settings = reader.bytes();
                                break;
                            }
                        case 2: {
                                message.configuration = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ClientSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings} ClientSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ClientSettings message.
                 * @function verify
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ClientSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.settings != null && message.hasOwnProperty("settings"))
                        if (!(message.settings && typeof message.settings.length === "number" || $util.isString(message.settings)))
                            return "settings: buffer expected";
                    if (message.configuration != null && message.hasOwnProperty("configuration"))
                        if (!(message.configuration && typeof message.configuration.length === "number" || $util.isString(message.configuration)))
                            return "configuration: buffer expected";
                    return null;
                };

                /**
                 * Creates a ClientSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings} ClientSettings
                 */
                ClientSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings)
                        return object;
                    var message = new $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings();
                    if (object.settings != null)
                        if (typeof object.settings === "string")
                            $util.base64.decode(object.settings, message.settings = $util.newBuffer($util.base64.length(object.settings)), 0);
                        else if (object.settings.length >= 0)
                            message.settings = object.settings;
                    if (object.configuration != null)
                        if (typeof object.configuration === "string")
                            $util.base64.decode(object.configuration, message.configuration = $util.newBuffer($util.base64.length(object.configuration)), 0);
                        else if (object.configuration.length >= 0)
                            message.configuration = object.configuration;
                    return message;
                };

                /**
                 * Creates a plain object from a ClientSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings} message ClientSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ClientSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.settings = "";
                        else {
                            object.settings = [];
                            if (options.bytes !== Array)
                                object.settings = $util.newBuffer(object.settings);
                        }
                        if (options.bytes === String)
                            object.configuration = "";
                        else {
                            object.configuration = [];
                            if (options.bytes !== Array)
                                object.configuration = $util.newBuffer(object.configuration);
                        }
                    }
                    if (message.settings != null && message.hasOwnProperty("settings"))
                        object.settings = options.bytes === String ? $util.base64.encode(message.settings, 0, message.settings.length) : options.bytes === Array ? Array.prototype.slice.call(message.settings) : message.settings;
                    if (message.configuration != null && message.hasOwnProperty("configuration"))
                        object.configuration = options.bytes === String ? $util.base64.encode(message.configuration, 0, message.configuration.length) : options.bytes === Array ? Array.prototype.slice.call(message.configuration) : message.configuration;
                    return object;
                };

                /**
                 * Converts this ClientSettings to JSON.
                 * @function toJSON
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ClientSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ClientSettings
                 * @function getTypeUrl
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ClientSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.CursorSetting.ClientSettings";
                };

                return ClientSettings;
            })();

            return CursorSetting;
        })();

        Request.Metadata = (function() {

            /**
             * Properties of a Metadata.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @interface IMetadata
             * @property {string|null} [os] Metadata os
             * @property {string|null} [arch] Metadata arch
             * @property {string|null} [version] Metadata version
             * @property {string|null} [path] Metadata path
             * @property {string|null} [timestamp] Metadata timestamp
             * @property {string|null} [workspacePath] Metadata workspacePath
             */

            /**
             * Constructs a new Metadata.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @classdesc Represents a Metadata.
             * @implements IMetadata
             * @constructor
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMetadata=} [properties] Properties to set
             */
            function Metadata(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Metadata os.
             * @member {string} os
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             */
            Metadata.prototype.os = "";

            /**
             * Metadata arch.
             * @member {string} arch
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             */
            Metadata.prototype.arch = "";

            /**
             * Metadata version.
             * @member {string} version
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             */
            Metadata.prototype.version = "";

            /**
             * Metadata path.
             * @member {string} path
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             */
            Metadata.prototype.path = "";

            /**
             * Metadata timestamp.
             * @member {string} timestamp
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             */
            Metadata.prototype.timestamp = "";

            /**
             * Metadata workspacePath.
             * @member {string} workspacePath
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             */
            Metadata.prototype.workspacePath = "";

            /**
             * Creates a new Metadata instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMetadata=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Metadata} Metadata instance
             */
            Metadata.create = function create(properties) {
                return new Metadata(properties);
            };

            /**
             * Encodes the specified Metadata message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Metadata.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMetadata} message Metadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Metadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.os != null && Object.hasOwnProperty.call(message, "os"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.os);
                if (message.arch != null && Object.hasOwnProperty.call(message, "arch"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.arch);
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.version);
                if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.path);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.timestamp);
                if (message.workspacePath != null && Object.hasOwnProperty.call(message, "workspacePath"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.workspacePath);
                return writer;
            };

            /**
             * Encodes the specified Metadata message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Metadata.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMetadata} message Metadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Metadata.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Metadata message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Metadata} Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Metadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.Metadata();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.os = reader.string();
                            break;
                        }
                    case 2: {
                            message.arch = reader.string();
                            break;
                        }
                    case 3: {
                            message.version = reader.string();
                            break;
                        }
                    case 4: {
                            message.path = reader.string();
                            break;
                        }
                    case 5: {
                            message.timestamp = reader.string();
                            break;
                        }
                    case 6: {
                            message.workspacePath = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Metadata message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Metadata} Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Metadata.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Metadata message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Metadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.os != null && message.hasOwnProperty("os"))
                    if (!$util.isString(message.os))
                        return "os: string expected";
                if (message.arch != null && message.hasOwnProperty("arch"))
                    if (!$util.isString(message.arch))
                        return "arch: string expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isString(message.timestamp))
                        return "timestamp: string expected";
                if (message.workspacePath != null && message.hasOwnProperty("workspacePath"))
                    if (!$util.isString(message.workspacePath))
                        return "workspacePath: string expected";
                return null;
            };

            /**
             * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Metadata} Metadata
             */
            Metadata.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.Metadata)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsRequest.Request.Metadata();
                if (object.os != null)
                    message.os = String(object.os);
                if (object.arch != null)
                    message.arch = String(object.arch);
                if (object.version != null)
                    message.version = String(object.version);
                if (object.path != null)
                    message.path = String(object.path);
                if (object.timestamp != null)
                    message.timestamp = String(object.timestamp);
                if (object.workspacePath != null)
                    message.workspacePath = String(object.workspacePath);
                return message;
            };

            /**
             * Creates a plain object from a Metadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.Metadata} message Metadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Metadata.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.os = "";
                    object.arch = "";
                    object.version = "";
                    object.path = "";
                    object.timestamp = "";
                    object.workspacePath = "";
                }
                if (message.os != null && message.hasOwnProperty("os"))
                    object.os = message.os;
                if (message.arch != null && message.hasOwnProperty("arch"))
                    object.arch = message.arch;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.path != null && message.hasOwnProperty("path"))
                    object.path = message.path;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = message.timestamp;
                if (message.workspacePath != null && message.hasOwnProperty("workspacePath"))
                    object.workspacePath = message.workspacePath;
                return object;
            };

            /**
             * Converts this Metadata to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Metadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Metadata
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Metadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.Metadata";
            };

            return Metadata;
        })();

        Request.MessageId = (function() {

            /**
             * Properties of a MessageId.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @interface IMessageId
             * @property {string|null} [messageId] MessageId messageId
             * @property {string|null} [summaryId] MessageId summaryId
             * @property {number|null} [role] MessageId role
             */

            /**
             * Constructs a new MessageId.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @classdesc Represents a MessageId.
             * @implements IMessageId
             * @constructor
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessageId=} [properties] Properties to set
             */
            function MessageId(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageId messageId.
             * @member {string} messageId
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @instance
             */
            MessageId.prototype.messageId = "";

            /**
             * MessageId summaryId.
             * @member {string} summaryId
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @instance
             */
            MessageId.prototype.summaryId = "";

            /**
             * MessageId role.
             * @member {number} role
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @instance
             */
            MessageId.prototype.role = 0;

            /**
             * Creates a new MessageId instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessageId=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsRequest.Request.MessageId} MessageId instance
             */
            MessageId.create = function create(properties) {
                return new MessageId(properties);
            };

            /**
             * Encodes the specified MessageId message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.MessageId.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessageId} message MessageId message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageId.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageId);
                if (message.summaryId != null && Object.hasOwnProperty.call(message, "summaryId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.summaryId);
                if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.role);
                return writer;
            };

            /**
             * Encodes the specified MessageId message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.MessageId.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessageId} message MessageId message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageId.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageId message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsRequest.Request.MessageId} MessageId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageId.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.MessageId();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.messageId = reader.string();
                            break;
                        }
                    case 2: {
                            message.summaryId = reader.string();
                            break;
                        }
                    case 3: {
                            message.role = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageId message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsRequest.Request.MessageId} MessageId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageId.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageId message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageId.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messageId != null && message.hasOwnProperty("messageId"))
                    if (!$util.isString(message.messageId))
                        return "messageId: string expected";
                if (message.summaryId != null && message.hasOwnProperty("summaryId"))
                    if (!$util.isString(message.summaryId))
                        return "summaryId: string expected";
                if (message.role != null && message.hasOwnProperty("role"))
                    if (!$util.isInteger(message.role))
                        return "role: integer expected";
                return null;
            };

            /**
             * Creates a MessageId message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsRequest.Request.MessageId} MessageId
             */
            MessageId.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.MessageId)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsRequest.Request.MessageId();
                if (object.messageId != null)
                    message.messageId = String(object.messageId);
                if (object.summaryId != null)
                    message.summaryId = String(object.summaryId);
                if (object.role != null)
                    message.role = object.role | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessageId message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.MessageId} message MessageId
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageId.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.messageId = "";
                    object.summaryId = "";
                    object.role = 0;
                }
                if (message.messageId != null && message.hasOwnProperty("messageId"))
                    object.messageId = message.messageId;
                if (message.summaryId != null && message.hasOwnProperty("summaryId"))
                    object.summaryId = message.summaryId;
                if (message.role != null && message.hasOwnProperty("role"))
                    object.role = message.role;
                return object;
            };

            /**
             * Converts this MessageId to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageId.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MessageId
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MessageId.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.MessageId";
            };

            return MessageId;
        })();

        return Request;
    })();

    return StreamUnifiedChatWithToolsRequest;
})();

$root.StreamUnifiedChatWithToolsResponse = (function() {

    /**
     * Properties of a StreamUnifiedChatWithToolsResponse.
     * @exports IStreamUnifiedChatWithToolsResponse
     * @interface IStreamUnifiedChatWithToolsResponse
     * @property {StreamUnifiedChatWithToolsResponse.IMessage|null} [message] StreamUnifiedChatWithToolsResponse message
     * @property {IMessageSummary|null} [summary] StreamUnifiedChatWithToolsResponse summary
     */

    /**
     * Constructs a new StreamUnifiedChatWithToolsResponse.
     * @exports StreamUnifiedChatWithToolsResponse
     * @classdesc Represents a StreamUnifiedChatWithToolsResponse.
     * @implements IStreamUnifiedChatWithToolsResponse
     * @constructor
     * @param {IStreamUnifiedChatWithToolsResponse=} [properties] Properties to set
     */
    function StreamUnifiedChatWithToolsResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StreamUnifiedChatWithToolsResponse message.
     * @member {StreamUnifiedChatWithToolsResponse.IMessage|null|undefined} message
     * @memberof StreamUnifiedChatWithToolsResponse
     * @instance
     */
    StreamUnifiedChatWithToolsResponse.prototype.message = null;

    /**
     * StreamUnifiedChatWithToolsResponse summary.
     * @member {IMessageSummary|null|undefined} summary
     * @memberof StreamUnifiedChatWithToolsResponse
     * @instance
     */
    StreamUnifiedChatWithToolsResponse.prototype.summary = null;

    /**
     * Creates a new StreamUnifiedChatWithToolsResponse instance using the specified properties.
     * @function create
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {IStreamUnifiedChatWithToolsResponse=} [properties] Properties to set
     * @returns {StreamUnifiedChatWithToolsResponse} StreamUnifiedChatWithToolsResponse instance
     */
    StreamUnifiedChatWithToolsResponse.create = function create(properties) {
        return new StreamUnifiedChatWithToolsResponse(properties);
    };

    /**
     * Encodes the specified StreamUnifiedChatWithToolsResponse message. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.verify|verify} messages.
     * @function encode
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {IStreamUnifiedChatWithToolsResponse} message StreamUnifiedChatWithToolsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StreamUnifiedChatWithToolsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            $root.StreamUnifiedChatWithToolsResponse.Message.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.summary != null && Object.hasOwnProperty.call(message, "summary"))
            $root.MessageSummary.encode(message.summary, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StreamUnifiedChatWithToolsResponse message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {IStreamUnifiedChatWithToolsResponse} message StreamUnifiedChatWithToolsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StreamUnifiedChatWithToolsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StreamUnifiedChatWithToolsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StreamUnifiedChatWithToolsResponse} StreamUnifiedChatWithToolsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StreamUnifiedChatWithToolsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2: {
                    message.message = $root.StreamUnifiedChatWithToolsResponse.Message.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.summary = $root.MessageSummary.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StreamUnifiedChatWithToolsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StreamUnifiedChatWithToolsResponse} StreamUnifiedChatWithToolsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StreamUnifiedChatWithToolsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StreamUnifiedChatWithToolsResponse message.
     * @function verify
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StreamUnifiedChatWithToolsResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message")) {
            var error = $root.StreamUnifiedChatWithToolsResponse.Message.verify(message.message);
            if (error)
                return "message." + error;
        }
        if (message.summary != null && message.hasOwnProperty("summary")) {
            var error = $root.MessageSummary.verify(message.summary);
            if (error)
                return "summary." + error;
        }
        return null;
    };

    /**
     * Creates a StreamUnifiedChatWithToolsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StreamUnifiedChatWithToolsResponse} StreamUnifiedChatWithToolsResponse
     */
    StreamUnifiedChatWithToolsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.StreamUnifiedChatWithToolsResponse)
            return object;
        var message = new $root.StreamUnifiedChatWithToolsResponse();
        if (object.message != null) {
            if (typeof object.message !== "object")
                throw TypeError(".StreamUnifiedChatWithToolsResponse.message: object expected");
            message.message = $root.StreamUnifiedChatWithToolsResponse.Message.fromObject(object.message);
        }
        if (object.summary != null) {
            if (typeof object.summary !== "object")
                throw TypeError(".StreamUnifiedChatWithToolsResponse.summary: object expected");
            message.summary = $root.MessageSummary.fromObject(object.summary);
        }
        return message;
    };

    /**
     * Creates a plain object from a StreamUnifiedChatWithToolsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {StreamUnifiedChatWithToolsResponse} message StreamUnifiedChatWithToolsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StreamUnifiedChatWithToolsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.message = null;
            object.summary = null;
        }
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = $root.StreamUnifiedChatWithToolsResponse.Message.toObject(message.message, options);
        if (message.summary != null && message.hasOwnProperty("summary"))
            object.summary = $root.MessageSummary.toObject(message.summary, options);
        return object;
    };

    /**
     * Converts this StreamUnifiedChatWithToolsResponse to JSON.
     * @function toJSON
     * @memberof StreamUnifiedChatWithToolsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StreamUnifiedChatWithToolsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for StreamUnifiedChatWithToolsResponse
     * @function getTypeUrl
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StreamUnifiedChatWithToolsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StreamUnifiedChatWithToolsResponse";
    };

    StreamUnifiedChatWithToolsResponse.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof StreamUnifiedChatWithToolsResponse
         * @interface IMessage
         * @property {string|null} [content] Message content
         * @property {StreamUnifiedChatWithToolsResponse.Message.IWebTool|null} [webtool] Message webtool
         * @property {StreamUnifiedChatWithToolsResponse.Message.IUnknown12|null} [unknown12] Message unknown12
         * @property {string|null} [messageId] Message messageId
         * @property {string|null} [unknown23] Message unknown23
         * @property {IMessageThinking|null} [thinking] Message thinking
         * @property {string|null} [unknown27] Message unknown27
         */

        /**
         * Constructs a new Message.
         * @memberof StreamUnifiedChatWithToolsResponse
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {StreamUnifiedChatWithToolsResponse.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message content.
         * @member {string} content
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.content = "";

        /**
         * Message webtool.
         * @member {StreamUnifiedChatWithToolsResponse.Message.IWebTool|null|undefined} webtool
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.webtool = null;

        /**
         * Message unknown12.
         * @member {StreamUnifiedChatWithToolsResponse.Message.IUnknown12|null|undefined} unknown12
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.unknown12 = null;

        /**
         * Message messageId.
         * @member {string} messageId
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.messageId = "";

        /**
         * Message unknown23.
         * @member {string} unknown23
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.unknown23 = "";

        /**
         * Message thinking.
         * @member {IMessageThinking|null|undefined} thinking
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.thinking = null;

        /**
         * Message unknown27.
         * @member {string} unknown27
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.unknown27 = "";

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {StreamUnifiedChatWithToolsResponse.IMessage=} [properties] Properties to set
         * @returns {StreamUnifiedChatWithToolsResponse.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.verify|verify} messages.
         * @function encode
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {StreamUnifiedChatWithToolsResponse.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            if (message.webtool != null && Object.hasOwnProperty.call(message, "webtool"))
                $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.encode(message.webtool, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.unknown12 != null && Object.hasOwnProperty.call(message, "unknown12"))
                $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.encode(message.unknown12, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.messageId);
            if (message.unknown23 != null && Object.hasOwnProperty.call(message, "unknown23"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.unknown23);
            if (message.thinking != null && Object.hasOwnProperty.call(message, "thinking"))
                $root.MessageThinking.encode(message.thinking, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.unknown27 != null && Object.hasOwnProperty.call(message, "unknown27"))
                writer.uint32(/* id 27, wireType 2 =*/218).string(message.unknown27);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {StreamUnifiedChatWithToolsResponse.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {StreamUnifiedChatWithToolsResponse.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsResponse.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.content = reader.string();
                        break;
                    }
                case 11: {
                        message.webtool = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.unknown12 = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.messageId = reader.string();
                        break;
                    }
                case 23: {
                        message.unknown23 = reader.string();
                        break;
                    }
                case 25: {
                        message.thinking = $root.MessageThinking.decode(reader, reader.uint32());
                        break;
                    }
                case 27: {
                        message.unknown27 = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {StreamUnifiedChatWithToolsResponse.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.webtool != null && message.hasOwnProperty("webtool")) {
                var error = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.verify(message.webtool);
                if (error)
                    return "webtool." + error;
            }
            if (message.unknown12 != null && message.hasOwnProperty("unknown12")) {
                var error = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.verify(message.unknown12);
                if (error)
                    return "unknown12." + error;
            }
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isString(message.messageId))
                    return "messageId: string expected";
            if (message.unknown23 != null && message.hasOwnProperty("unknown23"))
                if (!$util.isString(message.unknown23))
                    return "unknown23: string expected";
            if (message.thinking != null && message.hasOwnProperty("thinking")) {
                var error = $root.MessageThinking.verify(message.thinking);
                if (error)
                    return "thinking." + error;
            }
            if (message.unknown27 != null && message.hasOwnProperty("unknown27"))
                if (!$util.isString(message.unknown27))
                    return "unknown27: string expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {StreamUnifiedChatWithToolsResponse.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.StreamUnifiedChatWithToolsResponse.Message)
                return object;
            var message = new $root.StreamUnifiedChatWithToolsResponse.Message();
            if (object.content != null)
                message.content = String(object.content);
            if (object.webtool != null) {
                if (typeof object.webtool !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsResponse.Message.webtool: object expected");
                message.webtool = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.fromObject(object.webtool);
            }
            if (object.unknown12 != null) {
                if (typeof object.unknown12 !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsResponse.Message.unknown12: object expected");
                message.unknown12 = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.fromObject(object.unknown12);
            }
            if (object.messageId != null)
                message.messageId = String(object.messageId);
            if (object.unknown23 != null)
                message.unknown23 = String(object.unknown23);
            if (object.thinking != null) {
                if (typeof object.thinking !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsResponse.Message.thinking: object expected");
                message.thinking = $root.MessageThinking.fromObject(object.thinking);
            }
            if (object.unknown27 != null)
                message.unknown27 = String(object.unknown27);
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {StreamUnifiedChatWithToolsResponse.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.content = "";
                object.webtool = null;
                object.unknown12 = null;
                object.messageId = "";
                object.unknown23 = "";
                object.thinking = null;
                object.unknown27 = "";
            }
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.webtool != null && message.hasOwnProperty("webtool"))
                object.webtool = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.toObject(message.webtool, options);
            if (message.unknown12 != null && message.hasOwnProperty("unknown12"))
                object.unknown12 = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.toObject(message.unknown12, options);
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                object.messageId = message.messageId;
            if (message.unknown23 != null && message.hasOwnProperty("unknown23"))
                object.unknown23 = message.unknown23;
            if (message.thinking != null && message.hasOwnProperty("thinking"))
                object.thinking = $root.MessageThinking.toObject(message.thinking, options);
            if (message.unknown27 != null && message.hasOwnProperty("unknown27"))
                object.unknown27 = message.unknown27;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Message
         * @function getTypeUrl
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/StreamUnifiedChatWithToolsResponse.Message";
        };

        Message.WebTool = (function() {

            /**
             * Properties of a WebTool.
             * @memberof StreamUnifiedChatWithToolsResponse.Message
             * @interface IWebTool
             * @property {Array.<StreamUnifiedChatWithToolsResponse.Message.WebTool.IWebPage>|null} [webPage] WebTool webPage
             */

            /**
             * Constructs a new WebTool.
             * @memberof StreamUnifiedChatWithToolsResponse.Message
             * @classdesc Represents a WebTool.
             * @implements IWebTool
             * @constructor
             * @param {StreamUnifiedChatWithToolsResponse.Message.IWebTool=} [properties] Properties to set
             */
            function WebTool(properties) {
                this.webPage = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebTool webPage.
             * @member {Array.<StreamUnifiedChatWithToolsResponse.Message.WebTool.IWebPage>} webPage
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @instance
             */
            WebTool.prototype.webPage = $util.emptyArray;

            /**
             * Creates a new WebTool instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.IWebTool=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool} WebTool instance
             */
            WebTool.create = function create(properties) {
                return new WebTool(properties);
            };

            /**
             * Encodes the specified WebTool message. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.WebTool.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.IWebTool} message WebTool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebTool.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.webPage != null && message.webPage.length)
                    for (var i = 0; i < message.webPage.length; ++i)
                        $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.encode(message.webPage[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified WebTool message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.WebTool.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.IWebTool} message WebTool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebTool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebTool message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool} WebTool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebTool.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsResponse.Message.WebTool();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.webPage && message.webPage.length))
                                message.webPage = [];
                            message.webPage.push($root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WebTool message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool} WebTool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebTool.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebTool message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebTool.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.webPage != null && message.hasOwnProperty("webPage")) {
                    if (!Array.isArray(message.webPage))
                        return "webPage: array expected";
                    for (var i = 0; i < message.webPage.length; ++i) {
                        var error = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.verify(message.webPage[i]);
                        if (error)
                            return "webPage." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a WebTool message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool} WebTool
             */
            WebTool.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsResponse.Message.WebTool)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsResponse.Message.WebTool();
                if (object.webPage) {
                    if (!Array.isArray(object.webPage))
                        throw TypeError(".StreamUnifiedChatWithToolsResponse.Message.WebTool.webPage: array expected");
                    message.webPage = [];
                    for (var i = 0; i < object.webPage.length; ++i) {
                        if (typeof object.webPage[i] !== "object")
                            throw TypeError(".StreamUnifiedChatWithToolsResponse.Message.WebTool.webPage: object expected");
                        message.webPage[i] = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.fromObject(object.webPage[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a WebTool message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.WebTool} message WebTool
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebTool.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.webPage = [];
                if (message.webPage && message.webPage.length) {
                    object.webPage = [];
                    for (var j = 0; j < message.webPage.length; ++j)
                        object.webPage[j] = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.toObject(message.webPage[j], options);
                }
                return object;
            };

            /**
             * Converts this WebTool to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebTool.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WebTool
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebTool.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsResponse.Message.WebTool";
            };

            WebTool.WebPage = (function() {

                /**
                 * Properties of a WebPage.
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
                 * @interface IWebPage
                 * @property {string|null} [url] WebPage url
                 * @property {string|null} [title] WebPage title
                 * @property {string|null} [content] WebPage content
                 */

                /**
                 * Constructs a new WebPage.
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
                 * @classdesc Represents a WebPage.
                 * @implements IWebPage
                 * @constructor
                 * @param {StreamUnifiedChatWithToolsResponse.Message.WebTool.IWebPage=} [properties] Properties to set
                 */
                function WebPage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * WebPage url.
                 * @member {string} url
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @instance
                 */
                WebPage.prototype.url = "";

                /**
                 * WebPage title.
                 * @member {string} title
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @instance
                 */
                WebPage.prototype.title = "";

                /**
                 * WebPage content.
                 * @member {string} content
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @instance
                 */
                WebPage.prototype.content = "";

                /**
                 * Creates a new WebPage instance using the specified properties.
                 * @function create
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.WebTool.IWebPage=} [properties] Properties to set
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage} WebPage instance
                 */
                WebPage.create = function create(properties) {
                    return new WebPage(properties);
                };

                /**
                 * Encodes the specified WebPage message. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.verify|verify} messages.
                 * @function encode
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.WebTool.IWebPage} message WebPage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WebPage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
                    if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                    if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
                    return writer;
                };

                /**
                 * Encodes the specified WebPage message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.WebTool.IWebPage} message WebPage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WebPage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a WebPage message from the specified reader or buffer.
                 * @function decode
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage} WebPage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WebPage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.url = reader.string();
                                break;
                            }
                        case 2: {
                                message.title = reader.string();
                                break;
                            }
                        case 3: {
                                message.content = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a WebPage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage} WebPage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WebPage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a WebPage message.
                 * @function verify
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                WebPage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.url != null && message.hasOwnProperty("url"))
                        if (!$util.isString(message.url))
                            return "url: string expected";
                    if (message.title != null && message.hasOwnProperty("title"))
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    if (message.content != null && message.hasOwnProperty("content"))
                        if (!$util.isString(message.content))
                            return "content: string expected";
                    return null;
                };

                /**
                 * Creates a WebPage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage} WebPage
                 */
                WebPage.fromObject = function fromObject(object) {
                    if (object instanceof $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage)
                        return object;
                    var message = new $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage();
                    if (object.url != null)
                        message.url = String(object.url);
                    if (object.title != null)
                        message.title = String(object.title);
                    if (object.content != null)
                        message.content = String(object.content);
                    return message;
                };

                /**
                 * Creates a plain object from a WebPage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage} message WebPage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                WebPage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.url = "";
                        object.title = "";
                        object.content = "";
                    }
                    if (message.url != null && message.hasOwnProperty("url"))
                        object.url = message.url;
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    if (message.content != null && message.hasOwnProperty("content"))
                        object.content = message.content;
                    return object;
                };

                /**
                 * Converts this WebPage to JSON.
                 * @function toJSON
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                WebPage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for WebPage
                 * @function getTypeUrl
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                WebPage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage";
                };

                return WebPage;
            })();

            return WebTool;
        })();

        Message.Unknown12 = (function() {

            /**
             * Properties of an Unknown12.
             * @memberof StreamUnifiedChatWithToolsResponse.Message
             * @interface IUnknown12
             * @property {StreamUnifiedChatWithToolsResponse.Message.Unknown12.IContent|null} [content] Unknown12 content
             */

            /**
             * Constructs a new Unknown12.
             * @memberof StreamUnifiedChatWithToolsResponse.Message
             * @classdesc Represents an Unknown12.
             * @implements IUnknown12
             * @constructor
             * @param {StreamUnifiedChatWithToolsResponse.Message.IUnknown12=} [properties] Properties to set
             */
            function Unknown12(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Unknown12 content.
             * @member {StreamUnifiedChatWithToolsResponse.Message.Unknown12.IContent|null|undefined} content
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @instance
             */
            Unknown12.prototype.content = null;

            /**
             * Creates a new Unknown12 instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.IUnknown12=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12} Unknown12 instance
             */
            Unknown12.create = function create(properties) {
                return new Unknown12(properties);
            };

            /**
             * Encodes the specified Unknown12 message. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.Unknown12.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.IUnknown12} message Unknown12 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Unknown12.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.encode(message.content, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Unknown12 message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.Unknown12.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.IUnknown12} message Unknown12 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Unknown12.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Unknown12 message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12} Unknown12
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Unknown12.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.content = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Unknown12 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12} Unknown12
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Unknown12.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Unknown12 message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Unknown12.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.content != null && message.hasOwnProperty("content")) {
                    var error = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.verify(message.content);
                    if (error)
                        return "content." + error;
                }
                return null;
            };

            /**
             * Creates an Unknown12 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12} Unknown12
             */
            Unknown12.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12();
                if (object.content != null) {
                    if (typeof object.content !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsResponse.Message.Unknown12.content: object expected");
                    message.content = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.fromObject(object.content);
                }
                return message;
            };

            /**
             * Creates a plain object from an Unknown12 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.Unknown12} message Unknown12
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Unknown12.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.content = null;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.toObject(message.content, options);
                return object;
            };

            /**
             * Converts this Unknown12 to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Unknown12.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Unknown12
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Unknown12.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsResponse.Message.Unknown12";
            };

            Unknown12.Content = (function() {

                /**
                 * Properties of a Content.
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
                 * @interface IContent
                 * @property {string|null} [content] Content content
                 */

                /**
                 * Constructs a new Content.
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
                 * @classdesc Represents a Content.
                 * @implements IContent
                 * @constructor
                 * @param {StreamUnifiedChatWithToolsResponse.Message.Unknown12.IContent=} [properties] Properties to set
                 */
                function Content(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Content content.
                 * @member {string} content
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @instance
                 */
                Content.prototype.content = "";

                /**
                 * Creates a new Content instance using the specified properties.
                 * @function create
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.Unknown12.IContent=} [properties] Properties to set
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content} Content instance
                 */
                Content.create = function create(properties) {
                    return new Content(properties);
                };

                /**
                 * Encodes the specified Content message. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.verify|verify} messages.
                 * @function encode
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.Unknown12.IContent} message Content message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Content.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                    return writer;
                };

                /**
                 * Encodes the specified Content message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.Unknown12.IContent} message Content message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Content.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Content message from the specified reader or buffer.
                 * @function decode
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content} Content
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Content.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.content = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Content message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content} Content
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Content.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Content message.
                 * @function verify
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Content.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.content != null && message.hasOwnProperty("content"))
                        if (!$util.isString(message.content))
                            return "content: string expected";
                    return null;
                };

                /**
                 * Creates a Content message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content} Content
                 */
                Content.fromObject = function fromObject(object) {
                    if (object instanceof $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content)
                        return object;
                    var message = new $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content();
                    if (object.content != null)
                        message.content = String(object.content);
                    return message;
                };

                /**
                 * Creates a plain object from a Content message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content} message Content
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Content.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.content = "";
                    if (message.content != null && message.hasOwnProperty("content"))
                        object.content = message.content;
                    return object;
                };

                /**
                 * Converts this Content to JSON.
                 * @function toJSON
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Content.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Content
                 * @function getTypeUrl
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Content.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content";
                };

                return Content;
            })();

            return Unknown12;
        })();

        return Message;
    })();

    return StreamUnifiedChatWithToolsResponse;
})();

module.exports = $root;
