import type { WorkflowDocument } from "kanx-workflow";
import type { DiagramId } from "./diagrams";

export const diagramWorkflows = {
  "rag-workflow": {
    "version": 2,
    "direction": "DOWN",
    "nodes": [
      {
        "id": "node-gYeIBvtPr7FIMBUqbo8g-1",
        "name": "用户输入 User Query",
        "type": "data",
        "fields": {},
        "position": {
          "x": -1120,
          "y": -343
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-1",
        "name": "查询嵌入用改写 Query Rewrite for Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -1120,
          "y": -239
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-2",
        "name": "查询嵌入 Query Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -1120,
          "y": -135
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-3",
        "name": "检索器 Retriever",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -1120,
          "y": -32
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-4",
        "name": "重排器 Reranker",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -1120,
          "y": 72
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-5",
        "name": "上下文融合 Context Fusion",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -1120,
          "y": 176
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-6",
        "name": "提示词模板 Prompt Template",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -1120,
          "y": 280
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-7",
        "name": "LLM回答 LLM Answering",
        "type": "agent",
        "fields": {},
        "position": {
          "x": -1120,
          "y": 383
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-8",
        "name": "输出结果评估 Output Validating",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": -1120,
          "y": 487
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-18",
        "name": "向量数据存储 Vector Storing",
        "type": "data",
        "fields": {},
        "position": {
          "x": -870,
          "y": -32
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-27",
        "name": "文档数据 Document Data",
        "type": "data",
        "fields": {},
        "position": {
          "x": -870,
          "y": -343
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-28",
        "name": "文本分割 Chunker",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -870,
          "y": -239
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-29",
        "name": "向量编码 Vector Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -870,
          "y": -135
        }
      }
    ],
    "edges": [
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-9",
        "name": "",
        "type": "default",
        "source_id": "node-gYeIBvtPr7FIMBUqbo8g-1",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-1",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-10",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-1",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-2",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-11",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-2",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-3",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-12",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-3",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-4",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-13",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-4",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-5",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-14",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-5",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-6",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-15",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-6",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-7",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-16",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-7",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-8",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-19",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-18",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-3",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-33",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-27",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-28",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-34",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-28",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-29",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-35",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-29",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-18",
        "fields": {}
      }
    ],
    "nodeRenderers": {
      "data": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#EFF6FF",
        "borderColor": "#2563EB",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#1E3A8A",
        "accentColor": "#1D4ED8"
      },
      "tool": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#ECFDF3",
        "borderColor": "#079455",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#065F46",
        "accentColor": "#047857"
      },
      "agent": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#F5F3FF",
        "borderColor": "#7C3AED",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#4C1D95",
        "accentColor": "#6D28D9"
      },
      "evaluation": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#FFF7ED",
        "borderColor": "#EA580C",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#7C2D12",
        "accentColor": "#C2410C"
      }
    },
    "edgeRenderers": {
      "default": {
        "strokeColor": "#687785",
        "strokeWidth": 1.6,
        "labelColor": "#465360",
        "labelBackgroundColor": "#FFFFFF",
        "markerEnd": "arrow"
      }
    }
  },
  "geo-workflow": {
    "version": 2,
    "direction": "DOWN",
    "nodes": [
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-38",
        "name": "用户输入 User Query",
        "type": "data",
        "fields": {},
        "position": {
          "x": 940,
          "y": -281
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-40",
        "name": "查询嵌入用改写 Query Rewrite for Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 940,
          "y": -177
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-42",
        "name": "查询嵌入 Query Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 940,
          "y": -73
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-44",
        "name": "检索器 Retriever",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 940,
          "y": 30
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-46",
        "name": "重排器 Reranker",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 940,
          "y": 134
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-48",
        "name": "上下文融合 Context Fusion",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 940,
          "y": 238
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-50",
        "name": "提示词模板 Prompt Template",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 940,
          "y": 342
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-52",
        "name": "LLM回答 LLM Answering",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 940,
          "y": 445
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-53",
        "name": "输出结果评估 Output Validating",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 940,
          "y": 549
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-55",
        "name": "向量数据存储 Vector Storing",
        "type": "data",
        "fields": {},
        "position": {
          "x": 1210,
          "y": 238
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-59",
        "name": "网页数据 Web Pages Data",
        "type": "data",
        "fields": {},
        "position": {
          "x": 1210,
          "y": -73
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-61",
        "name": "文本分割 Chunker",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1210,
          "y": 31
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-63",
        "name": "向量编码 Vector Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1210,
          "y": 135
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-67",
        "name": "查询搜索用改写 Query Rewrite for Web Search",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1210,
          "y": -281
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-69",
        "name": "Web搜索 Web Search",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1210,
          "y": -177
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-33",
        "name": "SEO实施 SEO Implementing",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1520,
          "y": 445
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-35",
        "name": "GEO 实施 GEO Implementing",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1520,
          "y": 549
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-39",
        "name": "营销网页内容 Marketing Web Content",
        "type": "data",
        "fields": {},
        "position": {
          "x": 1520,
          "y": -281
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-52",
        "name": "网页抓取与索引建立 Web Crawling & Indexing",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1520,
          "y": -177
        }
      }
    ],
    "edges": [
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-37",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-38",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-40",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-68",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-38",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-67",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-39",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-40",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-42",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-41",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-42",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-44",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-43",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-44",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-46",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-45",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-46",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-48",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-47",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-48",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-50",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-49",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-50",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-52",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-51",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-52",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-53",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-65",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-53",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-33",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-66",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-53",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-35",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-54",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-55",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-44",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-58",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-59",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-61",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-60",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-61",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-63",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-62",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-63",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-55",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-70",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-67",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-69",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-71",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-69",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-59",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-68",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-33",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-39",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-69",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-35",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-39",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-55",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-39",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-52",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-60",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-52",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-69",
        "fields": {}
      }
    ],
    "nodeRenderers": {
      "data": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#EFF6FF",
        "borderColor": "#2563EB",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#1E3A8A",
        "accentColor": "#1D4ED8"
      },
      "tool": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#ECFDF3",
        "borderColor": "#079455",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#065F46",
        "accentColor": "#047857"
      },
      "agent": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#F5F3FF",
        "borderColor": "#7C3AED",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#4C1D95",
        "accentColor": "#6D28D9"
      },
      "evaluation": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#FFF7ED",
        "borderColor": "#EA580C",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#7C2D12",
        "accentColor": "#C2410C"
      }
    },
    "edgeRenderers": {
      "default": {
        "strokeColor": "#687785",
        "strokeWidth": 1.6,
        "labelColor": "#465360",
        "labelBackgroundColor": "#FFFFFF",
        "markerEnd": "arrow"
      }
    }
  },
  "rag-agent": {
    "version": 2,
    "direction": "DOWN",
    "nodes": [
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-105",
        "name": "用户输入 User Query",
        "type": "data",
        "fields": {},
        "position": {
          "x": -1110,
          "y": 1158
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-107",
        "name": "查询嵌入用改写 Query Rewrite for Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -610,
          "y": 1158
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-109",
        "name": "查询嵌入 Query Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -610,
          "y": 1262
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-111",
        "name": "检索器 Retriever",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -610,
          "y": 1365
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-113",
        "name": "重排器 Reranker",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -610,
          "y": 1469
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-117",
        "name": "提示词模板 Prompt Template",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -1110,
          "y": 1718
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-119",
        "name": "LLM回答 LLM Answering",
        "type": "agent",
        "fields": {},
        "position": {
          "x": -1110,
          "y": 1928
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-120",
        "name": "输出结果评估 Output Validating",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": -1110,
          "y": 2032
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-122",
        "name": "向量数据存储 Vector Storing",
        "type": "data",
        "fields": {},
        "position": {
          "x": -350,
          "y": 1469
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-126",
        "name": "文档数据 Document Data",
        "type": "data",
        "fields": {},
        "position": {
          "x": -350,
          "y": 1158
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-128",
        "name": "文本分割 Chunker",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -350,
          "y": 1262
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-130",
        "name": "向量编码 Vector Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -350,
          "y": 1366
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-134",
        "name": "LLM推理 LLM Reasoning",
        "type": "agent",
        "fields": {},
        "position": {
          "x": -1110,
          "y": 1262
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-135",
        "name": "LLM工具调用决策 LLM Tool Action Selecting",
        "type": "agent",
        "fields": {},
        "position": {
          "x": -1110,
          "y": 1366
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-136",
        "name": "否 No",
        "type": "decision",
        "fields": {},
        "position": {
          "x": -1050,
          "y": 1459
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-138",
        "name": "上下文融合 Context Fusion",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -1110,
          "y": 1608
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-142",
        "name": "是 Yes",
        "type": "decision",
        "fields": {},
        "position": {
          "x": -800,
          "y": 1356
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-145",
        "name": "RAG工具执行 RAG Tool Executing",
        "type": "tool",
        "fields": {},
        "position": {
          "x": -860,
          "y": 1262
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-1",
        "name": "LLM结果观察 LLM Result Observing",
        "type": "agent",
        "fields": {},
        "position": {
          "x": -1110,
          "y": 1825
        }
      }
    ],
    "edges": [
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-141",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-105",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-107",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-190",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-105",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-134",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-106",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-107",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-109",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-108",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-109",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-111",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-110",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-111",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-113",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-112",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-113",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-138",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-84",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-117",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-1",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-118",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-119",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-120",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-121",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-122",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-111",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-125",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-126",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-128",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-127",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-128",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-130",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-129",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-130",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-122",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-191",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-134",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-135",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-137",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-135",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-136",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-143",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-135",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-142",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-139",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-136",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-138",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-81",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-138",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-117",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-146",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-142",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-145",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-147",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-145",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-107",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-4",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-1",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-119",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-5",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-1",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-134",
        "fields": {}
      }
    ],
    "nodeRenderers": {
      "data": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#EFF6FF",
        "borderColor": "#2563EB",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#1E3A8A",
        "accentColor": "#1D4ED8"
      },
      "tool": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#ECFDF3",
        "borderColor": "#079455",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#065F46",
        "accentColor": "#047857"
      },
      "agent": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#F5F3FF",
        "borderColor": "#7C3AED",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#4C1D95",
        "accentColor": "#6D28D9"
      },
      "evaluation": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#FFF7ED",
        "borderColor": "#EA580C",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#7C2D12",
        "accentColor": "#C2410C"
      },
      "decision": {
        "width": 80,
        "height": 80,
        "backgroundColor": "#F8FAFC",
        "borderColor": "#64748B",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#334155",
        "accentColor": "#475569"
      }
    },
    "edgeRenderers": {
      "default": {
        "strokeColor": "#687785",
        "strokeWidth": 1.6,
        "labelColor": "#465360",
        "labelBackgroundColor": "#FFFFFF",
        "markerEnd": "arrow"
      }
    }
  },
  "geo-agent": {
    "version": 2,
    "direction": "DOWN",
    "nodes": [
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-149",
        "name": "用户输入 User Query",
        "type": "data",
        "fields": {},
        "position": {
          "x": 1210,
          "y": 1220
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-151",
        "name": "查询嵌入用改写 Query Rewrite for Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1710,
          "y": 1220
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-153",
        "name": "查询嵌入 Query Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1710,
          "y": 1324
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-155",
        "name": "检索器 Retriever",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1710,
          "y": 1427
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-157",
        "name": "重排器 Reranker",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1710,
          "y": 1531
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-161",
        "name": "提示词模板 Prompt Template",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1210,
          "y": 1760
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-178",
        "name": "LLM推理 LLM Reasoning",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 1210,
          "y": 1324
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-181",
        "name": "LLM工具调用决策 LLM Tool Action Selecting",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 1210,
          "y": 1428
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-183",
        "name": "否 No",
        "type": "decision",
        "fields": {},
        "position": {
          "x": 1270,
          "y": 1521
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-185",
        "name": "上下文融合 Context Fusion",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1210,
          "y": 1660
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-187",
        "name": "是 Yes",
        "type": "decision",
        "fields": {},
        "position": {
          "x": 1520,
          "y": 1418
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-189",
        "name": "RAG工具执行 RAG Tool Executing",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1460,
          "y": 1324
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-194",
        "name": "向量数据存储 Vector Storing",
        "type": "data",
        "fields": {},
        "position": {
          "x": 2000,
          "y": 1739
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-198",
        "name": "网页数据 Web Pages Data",
        "type": "data",
        "fields": {},
        "position": {
          "x": 2000,
          "y": 1428
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-200",
        "name": "文本分割 Chunker",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 2000,
          "y": 1532
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-202",
        "name": "向量编码 Vector Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 2000,
          "y": 1636
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-206",
        "name": "查询搜索用改写 Query Rewrite for Web Search",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 2000,
          "y": 1220
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-208",
        "name": "Web搜索 Web Search",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 2000,
          "y": 1324
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-213",
        "name": "品牌推荐评估指标体系",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 950,
          "y": 2069
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-223",
        "name": "品牌查询示例集",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 950,
          "y": 1220
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-225",
        "name": "品牌直接查询 Brand Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 660,
          "y": 1220
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-227",
        "name": "产品信息查询 Product Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 660,
          "y": 1290
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-228",
        "name": "品类查询 Category Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 660,
          "y": 1360
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-229",
        "name": "比较查询 Comparison Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 660,
          "y": 1430
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-230",
        "name": "推荐查询 Recommendation Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 660,
          "y": 1503
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-231",
        "name": "口碑查询 Reputation Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 660,
          "y": 1574
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-232",
        "name": "负面信息查询 Reputation Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 660,
          "y": 1715
        }
      },
      {
        "id": "node-9JG6q9n5wSOJoY5rCeZ1-240",
        "name": "知识查询 Knowledge Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 660,
          "y": 1644
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-14",
        "name": "LLM回答 LLM Answering",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 1210,
          "y": 1965
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-15",
        "name": "输出结果评估 Output Validating",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 1210,
          "y": 2069
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-17",
        "name": "LLM结果观察 LLM Result Observing",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 1210,
          "y": 1862
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-24",
        "name": "信源权威度 Source Authority",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 660,
          "y": 2069
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-25",
        "name": "语义匹配度 Semantic Similarity",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 660,
          "y": 2140
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-26",
        "name": "合规度 Compliance Score",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 660,
          "y": 2281
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-27",
        "name": "内容结构化程度 Content Structure",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 660,
          "y": 2210
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-71",
        "name": "SEO实施 SEO Implementing",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 2270,
          "y": 1965
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-73",
        "name": "GEO 实施 GEO Implementing",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 2270,
          "y": 2069
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-75",
        "name": "营销网页内容 Marketing Web Content",
        "type": "data",
        "fields": {},
        "position": {
          "x": 2270,
          "y": 1220
        }
      },
      {
        "id": "node-QMlk4b8tOmPcD2LvEvc1-77",
        "name": "网页抓取与索引建立 Web Crawling & Indexing",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 2270,
          "y": 1324
        }
      }
    ],
    "edges": [
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-148",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-149",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-151",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-192",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-149",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-178",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-211",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-149",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-206",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-150",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-151",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-153",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-152",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-153",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-155",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-154",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-155",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-157",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-156",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-157",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-185",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-83",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-161",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-17",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-193",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-178",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-181",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-179",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-181",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-183",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-180",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-181",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-187",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-182",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-183",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-185",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-82",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-185",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-161",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-186",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-187",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-189",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-188",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-189",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-151",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-212",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-194",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-155",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-197",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-198",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-200",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-199",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-200",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-202",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-201",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-202",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-194",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-205",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-206",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-208",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-207",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-208",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-198",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-23",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-213",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-15",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-224",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-223",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-149",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-226",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-225",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-223",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-233",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-227",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-223",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-234",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-228",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-223",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-235",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-229",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-223",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-236",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-230",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-223",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-237",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-231",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-223",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-238",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-232",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-223",
        "fields": {}
      },
      {
        "id": "9JG6q9n5wSOJoY5rCeZ1-241",
        "name": "",
        "type": "default",
        "source_id": "node-9JG6q9n5wSOJoY5rCeZ1-240",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-223",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-13",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-14",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-15",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-79",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-15",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-71",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-80",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-15",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-73",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-16",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-17",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-14",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-21",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-17",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-178",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-28",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-24",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-213",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-29",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-25",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-213",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-31",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-26",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-213",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-30",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-27",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-213",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-70",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-71",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-75",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-72",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-73",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-75",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-74",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-75",
        "target_id": "node-QMlk4b8tOmPcD2LvEvc1-77",
        "fields": {}
      },
      {
        "id": "QMlk4b8tOmPcD2LvEvc1-78",
        "name": "",
        "type": "default",
        "source_id": "node-QMlk4b8tOmPcD2LvEvc1-77",
        "target_id": "node-9JG6q9n5wSOJoY5rCeZ1-208",
        "fields": {}
      }
    ],
    "nodeRenderers": {
      "data": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#EFF6FF",
        "borderColor": "#2563EB",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#1E3A8A",
        "accentColor": "#1D4ED8"
      },
      "tool": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#ECFDF3",
        "borderColor": "#079455",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#065F46",
        "accentColor": "#047857"
      },
      "agent": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#F5F3FF",
        "borderColor": "#7C3AED",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#4C1D95",
        "accentColor": "#6D28D9"
      },
      "decision": {
        "width": 80,
        "height": 80,
        "backgroundColor": "#F8FAFC",
        "borderColor": "#64748B",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#334155",
        "accentColor": "#475569"
      },
      "evaluation": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#FFF7ED",
        "borderColor": "#EA580C",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#7C2D12",
        "accentColor": "#C2410C"
      }
    },
    "edgeRenderers": {
      "default": {
        "strokeColor": "#687785",
        "strokeWidth": 1.6,
        "labelColor": "#465360",
        "labelBackgroundColor": "#FFFFFF",
        "markerEnd": "arrow"
      }
    }
  },
  "geo": {
    "version": 2,
    "direction": "DOWN",
    "nodes": [
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--2",
        "name": "用户输入 User Query",
        "type": "data",
        "fields": {},
        "position": {
          "x": 4300,
          "y": -399
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--14",
        "name": "提示词模板 Prompt Template",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4300,
          "y": -249
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--16",
        "name": "LLM回答 LLM Answering",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 4300,
          "y": -146
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--17",
        "name": "输出结果评估 Output Validating",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4300,
          "y": -42
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--31",
        "name": "增加查询关键词出现次数 Keyword Stuffing",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4840,
          "y": -146
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--36",
        "name": "营销网页内容 Marketing Web Content",
        "type": "data",
        "fields": {},
        "position": {
          "x": 4840,
          "y": -399
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--38",
        "name": "增加相关统计数据 Statistics Addition",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4840,
          "y": 61
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--46",
        "name": "增加相关引语 Quotation Addition",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4840,
          "y": 131
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--47",
        "name": "增加可信来源的引用 Cite Sources",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4840,
          "y": 201
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--48",
        "name": "增加独特词汇 Unique Words",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4840,
          "y": 271
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--49",
        "name": "增加技术术语 Technical Terms",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4840,
          "y": 341
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--50",
        "name": "简化语言，使内容容易理解 Easy-to-Understand",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4840,
          "y": 411
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--51",
        "name": "增加文本流畅性 Fluency Optimization",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4840,
          "y": 481
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--52",
        "name": "将文本改写为更有说服力、权威感的风格 Authoritative",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4840,
          "y": 551
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--64",
        "name": "评估指标体系",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4020,
          "y": -42
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--66",
        "name": "位置加权贡献度 Position-Adjusted Word Count",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 3730,
          "y": -42
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--68",
        "name": "主观可见度 Subjective Impression",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3730,
          "y": 29
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--74",
        "name": "内容数量",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3450,
          "y": 29
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--75",
        "name": "展示位置",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 3450,
          "y": 100
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--76",
        "name": "相关性",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3450,
          "y": 170
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--77",
        "name": "独特性",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3450,
          "y": 240
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--78",
        "name": "点击可能性",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3450,
          "y": 310
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--79",
        "name": "内容多样性",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3450,
          "y": 380
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--80",
        "name": "信源影响力",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3450,
          "y": 450
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--142",
        "name": "SEO Methods",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4560,
          "y": -146
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--145",
        "name": "GEO Methods",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4560,
          "y": 61
        }
      }
    ],
    "edges": [
      {
        "id": "0LD-CIEcB2LvlnDhH_h--28",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--2",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--14",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--13",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--14",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--16",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--15",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--16",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--17",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--143",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--17",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--142",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--146",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--17",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--145",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--54",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--31",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--36",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--37",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--36",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--14",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--55",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--38",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--36",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--56",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--46",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--36",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--58",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--47",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--36",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--59",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--48",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--36",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--60",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--49",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--36",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--61",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--50",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--36",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--62",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--51",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--36",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--63",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--52",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--36",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--73",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--64",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--17",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--65",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--66",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--64",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--67",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--68",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--64",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--81",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--74",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--68",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--82",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--75",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--68",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--83",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--76",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--68",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--84",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--77",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--68",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--85",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--78",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--68",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--86",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--79",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--68",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--87",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--80",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--68",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--144",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--142",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--31",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--147",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--145",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--38",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--148",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--145",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--46",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--149",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--145",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--47",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--150",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--145",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--48",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--151",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--145",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--49",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--152",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--145",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--50",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--153",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--145",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--51",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--154",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--145",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--52",
        "fields": {}
      }
    ],
    "nodeRenderers": {
      "data": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#EFF6FF",
        "borderColor": "#2563EB",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#1E3A8A",
        "accentColor": "#1D4ED8"
      },
      "tool": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#ECFDF3",
        "borderColor": "#079455",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#065F46",
        "accentColor": "#047857"
      },
      "agent": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#F5F3FF",
        "borderColor": "#7C3AED",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#4C1D95",
        "accentColor": "#6D28D9"
      },
      "evaluation": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#FFF7ED",
        "borderColor": "#EA580C",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#7C2D12",
        "accentColor": "#C2410C"
      }
    },
    "edgeRenderers": {
      "default": {
        "strokeColor": "#687785",
        "strokeWidth": 1.6,
        "labelColor": "#465360",
        "labelBackgroundColor": "#FFFFFF",
        "markerEnd": "arrow"
      }
    }
  },
  "autogeo": {
    "version": 2,
    "direction": "RIGHT",
    "nodes": [
      {
        "id": "region-0LD-CIEcB2LvlnDhH_h--225",
        "name": "路由分区",
        "type": "region-220x460",
        "fields": {},
        "position": {
          "x": 7110,
          "y": -226
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--156",
        "name": "用户输入 User Query",
        "type": "data",
        "fields": {},
        "position": {
          "x": 6840,
          "y": -383
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--158",
        "name": "提示词模板 Prompt Template",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 6840,
          "y": -233
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--160",
        "name": "LLM回答 LLM Answering",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 6840,
          "y": -130
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--163",
        "name": "输出结果评估 Output Validating",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 6840,
          "y": -26
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--166",
        "name": "解释器 Explainer",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7120,
          "y": -169
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--170",
        "name": "营销网页内容 Marketing Web Content",
        "type": "data",
        "fields": {},
        "position": {
          "x": 7380,
          "y": -383
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--188",
        "name": "评估指标体系",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 6560,
          "y": -26
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--218",
        "name": "提取器 Extractor",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7120,
          "y": -65
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--219",
        "name": "合并器 Merger",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7120,
          "y": 39
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--220",
        "name": "过滤器 Filter",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7120,
          "y": 143
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--228",
        "name": "GE Preference Rules",
        "type": "data",
        "fields": {},
        "position": {
          "x": 7400,
          "y": -26
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--231",
        "name": "Comprehensive",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7670,
          "y": -26
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--232",
        "name": "In-Depth",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7670,
          "y": 45
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--233",
        "name": "Step-by-Step Guide",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7670,
          "y": 116
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--234",
        "name": "Domain-Specific",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7670,
          "y": 187
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--239",
        "name": "提示词模板 Prompt Template",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7940,
          "y": -26
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--246",
        "name": "LLM改写 LLM Rewriting",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 8210,
          "y": -26
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--250",
        "name": "信源可见度 Visibility",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 6270,
          "y": -26
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--252",
        "name": "内容贡献度 Word Count",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 5980,
          "y": -26
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--254",
        "name": "位置加权贡献度 Position-Adjusted Word Count",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 5980,
          "y": 45
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--257",
        "name": "GE效用 GE Utility",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 6270,
          "y": 247
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--259",
        "name": "关键信息覆盖 KPR",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 5980,
          "y": 247
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--261",
        "name": "关键信息矛盾 KPC",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 5980,
          "y": 318
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--262",
        "name": "生成答案的信源忠实性 Precision + Recall",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 5980,
          "y": 389
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--264",
        "name": "回答清晰程度 Clarity",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 5980,
          "y": 460
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--265",
        "name": "回答的信息价值 Insight",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 5980,
          "y": 531
        }
      }
    ],
    "edges": [
      {
        "id": "0LD-CIEcB2LvlnDhH_h--230",
        "name": "",
        "type": "default",
        "source_id": "region-0LD-CIEcB2LvlnDhH_h--225",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--228",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--155",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--156",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--158",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--157",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--158",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--160",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--159",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--160",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--163",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--229",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--163",
        "target_id": "region-0LD-CIEcB2LvlnDhH_h--225",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--221",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--166",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--218",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--169",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--170",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--158",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--187",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--188",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--163",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--222",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--218",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--219",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--223",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--219",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--220",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--235",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--228",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--231",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--236",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--228",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--232",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--237",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--228",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--233",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--238",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--228",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--234",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--242",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--231",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--239",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--243",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--232",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--239",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--244",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--233",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--239",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--245",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--234",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--239",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--247",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--239",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--246",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--248",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--246",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--170",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--256",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--250",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--188",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--251",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--252",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--250",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--253",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--254",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--250",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--263",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--257",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--188",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--258",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--259",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--257",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--260",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--261",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--257",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--266",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--262",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--257",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--267",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--264",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--257",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--268",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--265",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--257",
        "fields": {}
      }
    ],
    "nodeRenderers": {
      "region-220x460": {
        "width": 220,
        "height": 460,
        "backgroundColor": "transparent",
        "borderColor": "transparent",
        "borderWidth": 0,
        "borderRadius": 6,
        "textColor": "transparent",
        "accentColor": "transparent"
      },
      "data": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#EFF6FF",
        "borderColor": "#2563EB",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#1E3A8A",
        "accentColor": "#1D4ED8"
      },
      "tool": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#ECFDF3",
        "borderColor": "#079455",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#065F46",
        "accentColor": "#047857"
      },
      "agent": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#F5F3FF",
        "borderColor": "#7C3AED",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#4C1D95",
        "accentColor": "#6D28D9"
      },
      "evaluation": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#FFF7ED",
        "borderColor": "#EA580C",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#7C2D12",
        "accentColor": "#C2410C"
      }
    },
    "edgeRenderers": {
      "default": {
        "strokeColor": "#687785",
        "strokeWidth": 1.6,
        "labelColor": "#465360",
        "labelBackgroundColor": "#FFFFFF",
        "markerEnd": "arrow"
      }
    }
  },
  "agent2ucb": {
    "version": 2,
    "direction": "RIGHT",
    "nodes": [
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--391",
        "name": "用户输入 User Query",
        "type": "data",
        "fields": {},
        "position": {
          "x": 4170,
          "y": 1338
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--393",
        "name": "提示词模板 Prompt Template",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4170,
          "y": 1488
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--395",
        "name": "LLM回答 LLM Answering",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 4170,
          "y": 1591
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--397",
        "name": "输出结果评估 Output Validating",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4170,
          "y": 1695
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--404",
        "name": "营销网页内容 Marketing Web Content",
        "type": "data",
        "fields": {},
        "position": {
          "x": 4710,
          "y": 1338
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--406",
        "name": "GEO Evaluator",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 3890,
          "y": 1695
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--431",
        "name": "引用频率",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 3600,
          "y": 1695
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--438",
        "name": "展示位置",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 3600,
          "y": 1766
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--449",
        "name": "EEAT-R Analysis",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 3600,
          "y": 2100
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--451",
        "name": "Evaluation Agent",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 3600,
          "y": 1984
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--453",
        "name": "Dual-UCB Controller 策略选择优化",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4440,
          "y": 1915
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--458",
        "name": "Dimension",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 3890,
          "y": 2100
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--459",
        "name": "是否体现经验信息 Experience",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4170,
          "y": 2100
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--460",
        "name": "内容是否具备专业性 Expertise",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4170,
          "y": 2173
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--461",
        "name": "是否具有权威性检索 Authoritativeness",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4170,
          "y": 2246
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--462",
        "name": "信息是否可信 Trustworthiness",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4170,
          "y": 2319
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--463",
        "name": "是否容易理解 Readability",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4170,
          "y": 2392
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--470",
        "name": "Standard UCB",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4170,
          "y": 1915
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--471",
        "name": "LLM-Prior UCB",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4170,
          "y": 1984
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--472",
        "name": "Sampling",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3890,
          "y": 1984
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--565",
        "name": "LLM改写 LLM Rewriting",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 4440,
          "y": 1695
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--568",
        "name": "计算可见度增益奖励",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4440,
          "y": 1805
        }
      }
    ],
    "edges": [
      {
        "id": "0LD-CIEcB2LvlnDhH_h--390",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--391",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--393",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--392",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--393",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--395",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--394",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--395",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--397",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--573",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--397",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--565",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--403",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--404",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--393",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--405",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--406",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--397",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--430",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--431",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--406",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--437",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--438",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--406",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--572",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--449",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--451",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--473",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--451",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--472",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--478",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--453",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--404",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--469",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--458",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--449",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--464",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--459",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--458",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--465",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--460",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--458",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--466",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--461",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--458",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--467",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--462",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--458",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--468",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--463",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--458",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--475",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--470",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--453",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--476",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--471",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--453",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--474",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--472",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--471",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--569",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--565",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--568",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--570",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--568",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--453",
        "fields": {}
      }
    ],
    "nodeRenderers": {
      "data": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#EFF6FF",
        "borderColor": "#2563EB",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#1E3A8A",
        "accentColor": "#1D4ED8"
      },
      "tool": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#ECFDF3",
        "borderColor": "#079455",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#065F46",
        "accentColor": "#047857"
      },
      "agent": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#F5F3FF",
        "borderColor": "#7C3AED",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#4C1D95",
        "accentColor": "#6D28D9"
      },
      "evaluation": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#FFF7ED",
        "borderColor": "#EA580C",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#7C2D12",
        "accentColor": "#C2410C"
      }
    },
    "edgeRenderers": {
      "default": {
        "strokeColor": "#687785",
        "strokeWidth": 1.6,
        "labelColor": "#465360",
        "labelBackgroundColor": "#FFFFFF",
        "markerEnd": "arrow"
      }
    }
  },
  "agenticgeo": {
    "version": 2,
    "direction": "RIGHT",
    "nodes": [
      {
        "id": "region-0LD-CIEcB2LvlnDhH_h--270",
        "name": "路由分区",
        "type": "region-220x220.5",
        "fields": {},
        "position": {
          "x": 6995,
          "y": 1572.75
        }
      },
      {
        "id": "region-0LD-CIEcB2LvlnDhH_h--330",
        "name": "路由分区",
        "type": "region-220x353",
        "fields": {},
        "position": {
          "x": 6995,
          "y": 1858
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--272",
        "name": "用户输入 User Query",
        "type": "data",
        "fields": {},
        "position": {
          "x": 6720,
          "y": 1296
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--274",
        "name": "提示词模板 Prompt Template",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 6720,
          "y": 1446
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--276",
        "name": "LLM回答 LLM Answering",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 6720,
          "y": 1549
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--278",
        "name": "输出结果评估 Output Validating",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 6720,
          "y": 1653
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--281",
        "name": "训练Critic模型 Offline Critic Alignment",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 7005,
          "y": 1629.75
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--285",
        "name": "营销网页内容 Marketing Web Content",
        "type": "data",
        "fields": {},
        "position": {
          "x": 7300,
          "y": 1296
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--287",
        "name": "评估指标体系",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 6440,
          "y": 1653
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--332",
        "name": "演化器 Evolver",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 7005,
          "y": 1915
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--334",
        "name": "MAP-Elites Archive",
        "type": "data",
        "fields": {},
        "position": {
          "x": 7005,
          "y": 2019
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--336",
        "name": "Co-Evolving Critic",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 7005,
          "y": 2123
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--338",
        "name": "Online Co-Evolution",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7305,
          "y": 1850
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--341",
        "name": "Critic-Guided Multi-Turn Rewriting",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 7005,
          "y": 2325
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--342",
        "name": "Inference",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7305,
          "y": 2250
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--346",
        "name": "GEO策略结构",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7305,
          "y": 1915
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--347",
        "name": "要实现的编辑目标 Instruction",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7600,
          "y": 1915
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--351",
        "name": "必须遵守的约束 Constraints",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7600,
          "y": 1988
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--352",
        "name": "改写中的推理步骤 Reasoning",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 7600,
          "y": 2061
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--353",
        "name": "输出格式 Format",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7600,
          "y": 2134
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--354",
        "name": "写作风格 Tone",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7600,
          "y": 2207
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--359",
        "name": "质量-多样性进化算法 Quality-Diversity",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 6720,
          "y": 2019
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--361",
        "name": "Value-Novelty Gate",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 6720,
          "y": 2092
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--362",
        "name": "PND Score",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 6440,
          "y": 2092
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--371",
        "name": "Small LLM",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 7305,
          "y": 1607.25
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--373",
        "name": "MLP Layers",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7305,
          "y": 1679.75
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--375",
        "name": "LoRA Tuning",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 7305,
          "y": 1450
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--378",
        "name": "LLM策略变异 LLM Strategy Mutating",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 7305,
          "y": 1986
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--381",
        "name": "训练Evolver模型",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 7005,
          "y": 1707.25
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--383",
        "name": "Advantage-Weighted Regression",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 6720,
          "y": 1806
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--385",
        "name": "Sibling-Aware Advantage",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 6440,
          "y": 1806
        }
      }
    ],
    "edges": [
      {
        "id": "0LD-CIEcB2LvlnDhH_h--344",
        "name": "",
        "type": "default",
        "source_id": "region-0LD-CIEcB2LvlnDhH_h--270",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--338",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--271",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--272",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--274",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--273",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--274",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--276",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--275",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--276",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--278",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--277",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--278",
        "target_id": "region-0LD-CIEcB2LvlnDhH_h--270",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--284",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--285",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--274",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--286",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--287",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--278",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--345",
        "name": "",
        "type": "default",
        "source_id": "region-0LD-CIEcB2LvlnDhH_h--330",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--342",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--331",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--332",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--334",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--333",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--334",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--336",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--387",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--341",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--285",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--349",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--346",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--332",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--350",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--347",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--346",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--355",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--351",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--346",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--356",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--352",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--346",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--357",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--353",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--346",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--358",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--354",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--346",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--382",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--359",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--334",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--364",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--361",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--334",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--363",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--362",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--361",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--380",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--375",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--281",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--388",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--371",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--375",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--389",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--371",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--373",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--379",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--378",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--332",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--384",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--383",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--381",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--386",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--385",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--383",
        "fields": {}
      }
    ],
    "nodeRenderers": {
      "region-220x220.5": {
        "width": 220,
        "height": 220.5,
        "backgroundColor": "transparent",
        "borderColor": "transparent",
        "borderWidth": 0,
        "borderRadius": 6,
        "textColor": "transparent",
        "accentColor": "transparent"
      },
      "region-220x353": {
        "width": 220,
        "height": 353,
        "backgroundColor": "transparent",
        "borderColor": "transparent",
        "borderWidth": 0,
        "borderRadius": 6,
        "textColor": "transparent",
        "accentColor": "transparent"
      },
      "data": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#EFF6FF",
        "borderColor": "#2563EB",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#1E3A8A",
        "accentColor": "#1D4ED8"
      },
      "tool": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#ECFDF3",
        "borderColor": "#079455",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#065F46",
        "accentColor": "#047857"
      },
      "agent": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#F5F3FF",
        "borderColor": "#7C3AED",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#4C1D95",
        "accentColor": "#6D28D9"
      },
      "evaluation": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#FFF7ED",
        "borderColor": "#EA580C",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#7C2D12",
        "accentColor": "#C2410C"
      }
    },
    "edgeRenderers": {
      "default": {
        "strokeColor": "#687785",
        "strokeWidth": 1.6,
        "labelColor": "#465360",
        "labelBackgroundColor": "#FFFFFF",
        "markerEnd": "arrow"
      }
    }
  },
  "our-geo-agentic-system": {
    "version": 2,
    "direction": "RIGHT",
    "nodes": [
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--484",
        "name": "用户输入 User Query",
        "type": "data",
        "fields": {},
        "position": {
          "x": 2510,
          "y": 4083
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--486",
        "name": "查询嵌入用改写 Query Rewrite for Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3010,
          "y": 4083
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--488",
        "name": "查询嵌入 Query Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3010,
          "y": 4187
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--490",
        "name": "检索器 Retriever",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3010,
          "y": 4290
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--492",
        "name": "重排器 Reranker",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3010,
          "y": 4394
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--494",
        "name": "提示词模板 Prompt Template",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 2510,
          "y": 4623
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--497",
        "name": "LLM推理 LLM Reasoning",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 2510,
          "y": 4187
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--500",
        "name": "LLM工具调用决策 LLM Tool Action Selecting",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 2510,
          "y": 4291
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--502",
        "name": "否 No",
        "type": "decision",
        "fields": {},
        "position": {
          "x": 2570,
          "y": 4384
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--504",
        "name": "上下文融合 Context Fusion",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 2510,
          "y": 4523
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--506",
        "name": "是 Yes",
        "type": "decision",
        "fields": {},
        "position": {
          "x": 2820,
          "y": 4281
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--508",
        "name": "RAG工具执行 RAG Tool Executing",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 2760,
          "y": 4187
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--510",
        "name": "向量数据存储 Vector Storing",
        "type": "data",
        "fields": {},
        "position": {
          "x": 3300,
          "y": 4602
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--512",
        "name": "网页数据 Web Pages Data",
        "type": "data",
        "fields": {},
        "position": {
          "x": 3300,
          "y": 4291
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--514",
        "name": "文本分割 Chunker",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3300,
          "y": 4395
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--516",
        "name": "向量编码 Vector Embedding",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3300,
          "y": 4499
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--518",
        "name": "查询搜索用改写 Query Rewrite for Web Search",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3300,
          "y": 4083
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--520",
        "name": "Web搜索 Web Search",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3300,
          "y": 4187
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--522",
        "name": "品牌推荐评估指标体系",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4230,
          "y": 4863
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--524",
        "name": "品牌查询示例集",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 2130,
          "y": 4083
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--526",
        "name": "品牌直接查询 Brand Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1840,
          "y": 4083
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--528",
        "name": "产品信息查询 Product Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1840,
          "y": 4153
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--530",
        "name": "品类查询 Category Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1840,
          "y": 4223
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--532",
        "name": "比较查询 Comparison Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1840,
          "y": 4293
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--534",
        "name": "推荐查询 Recommendation Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1840,
          "y": 4366
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--536",
        "name": "口碑查询 Reputation Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1840,
          "y": 4437
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--538",
        "name": "负面信息查询 Reputation Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1840,
          "y": 4578
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--540",
        "name": "知识查询 Knowledge Query",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 1840,
          "y": 4507
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--542",
        "name": "LLM回答 LLM Answering",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 2510,
          "y": 4828
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--545",
        "name": "输出结果评估 Output Validating",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 2510,
          "y": 4932
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--548",
        "name": "LLM结果观察 LLM Result Observing",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 2510,
          "y": 4725
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--550",
        "name": "信源权威度 Source Authority",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4510,
          "y": 4863
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--552",
        "name": "语义匹配度 Semantic Similarity",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4510,
          "y": 4934
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--554",
        "name": "合规度 Compliance Score",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4510,
          "y": 5075
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--556",
        "name": "内容结构化程度 Content Structure",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4510,
          "y": 5004
        }
      },
      {
        "id": "node-0LD-CIEcB2LvlnDhH_h--562",
        "name": "营销网页内容 Marketing Web Content",
        "type": "data",
        "fields": {},
        "position": {
          "x": 3570,
          "y": 4187
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-1",
        "name": "统计评估指标体系",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4230,
          "y": 5194
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-3",
        "name": "信源可见度 Visibility",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4510,
          "y": 5194
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-5",
        "name": "内容贡献度 Word Count",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4790,
          "y": 5194
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-7",
        "name": "位置加权贡献度 Position-Adjusted Word Count",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4790,
          "y": 5265
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-8",
        "name": "Overall",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4790,
          "y": 5336
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-10",
        "name": "GE效用 GE Utility",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4510,
          "y": 5467
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-12",
        "name": "关键信息覆盖 KPR",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4790,
          "y": 5467
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-14",
        "name": "关键信息矛盾 KPC",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4790,
          "y": 5538
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-16",
        "name": "生成答案的信源忠实性 Precision + Recall",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4790,
          "y": 5609
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-18",
        "name": "回答清晰程度 Clarity",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 4790,
          "y": 5680
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-20",
        "name": "回答的信息价值 Insight",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 4790,
          "y": 5751
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-22",
        "name": "LLM改写 LLM Refining",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 3940,
          "y": 4627
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-24",
        "name": "计算可见度增益奖励 Visibility Gain Reward Calculating",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4230,
          "y": 4738
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-26",
        "name": "Interaction-Aware Reward Model",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 3940,
          "y": 4298
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-29",
        "name": "Budgeted Combinatorial Bandit Selection",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3940,
          "y": 4409
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-31",
        "name": "上置信界算法UCB Upper Confidence Bond",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 4230,
          "y": 4298
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-33",
        "name": "Unified Prompt Construction",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3940,
          "y": 4518
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-36",
        "name": "GEO Evaluation",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 3940,
          "y": 4738
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-38",
        "name": "Full-Bandit Feedback",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4230,
          "y": 4409
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-42",
        "name": "合规审核Agent",
        "type": "agent",
        "fields": {},
        "position": {
          "x": 3940,
          "y": 4083
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-44",
        "name": "Strategy N-Combinating",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 3940,
          "y": 4187
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-52",
        "name": "增加查询关键词出现次数 Keyword Stuffing",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4520,
          "y": 3840
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-53",
        "name": "增加相关统计数据 Statistics Addition",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4520,
          "y": 3957
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-54",
        "name": "增加相关引语 Quotation Addition",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4520,
          "y": 4027
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-55",
        "name": "增加可信来源的引用 Cite Sources",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4520,
          "y": 4097
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-56",
        "name": "增加独特词汇 Unique Words",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4520,
          "y": 4167
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-57",
        "name": "增加技术术语 Technical Terms",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4520,
          "y": 4237
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-58",
        "name": "简化语言，使内容容易理解 Easy-to-Understand",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4520,
          "y": 4307
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-59",
        "name": "增加文本流畅性 Fluency Optimization",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4520,
          "y": 4377
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-60",
        "name": "将文本改写为更有说服力、权威感的风格 Authoritative",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4520,
          "y": 4447
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-62",
        "name": "SEO Strategy",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4230,
          "y": 3840
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-71",
        "name": "GEO Strategy",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4230,
          "y": 3957
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-115",
        "name": "用户输入 User Query",
        "type": "data",
        "fields": {},
        "position": {
          "x": 2510,
          "y": 5170
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-153",
        "name": "输出结果评估 Output Validating",
        "type": "evaluation",
        "fields": {},
        "position": {
          "x": 2510,
          "y": 5390
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-157",
        "name": "营销网页内容 Marketing Web Content",
        "type": "data",
        "fields": {},
        "position": {
          "x": 2780,
          "y": 5280
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-161",
        "name": "Web搜索工具 Web Search Tool",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 2510,
          "y": 5280
        }
      },
      {
        "id": "node-T7Nqk5fTyHt2_2dhpSra-168",
        "name": "合规品牌知识图谱",
        "type": "tool",
        "fields": {},
        "position": {
          "x": 4230,
          "y": 4083
        }
      }
    ],
    "edges": [
      {
        "id": "0LD-CIEcB2LvlnDhH_h--481",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--484",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--486",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--482",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--484",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--497",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--483",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--484",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--518",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--485",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--486",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--488",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--487",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--488",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--490",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--489",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--490",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--492",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--491",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--492",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--504",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--493",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--494",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--548",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--496",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--497",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--500",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--498",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--500",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--502",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--499",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--500",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--506",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--501",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--502",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--504",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--503",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--504",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--494",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--505",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--506",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--508",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--507",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--508",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--486",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--509",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--510",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--490",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--511",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--512",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--514",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--513",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--514",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--516",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--515",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--516",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--510",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--517",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--518",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--520",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--519",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--520",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--512",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-107",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--522",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-36",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--523",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--524",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--484",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-165",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--524",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-115",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--525",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--526",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--524",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--527",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--528",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--524",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--529",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--530",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--524",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--531",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--532",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--524",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--533",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--534",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--524",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--535",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--536",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--524",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--537",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--538",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--524",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--539",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--540",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--524",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--541",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--542",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--545",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-51",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--545",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-36",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--546",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--548",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--542",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--547",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--548",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--497",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-89",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--550",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--522",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-90",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--552",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--522",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-170",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--554",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--522",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-91",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--556",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--522",
        "fields": {}
      },
      {
        "id": "0LD-CIEcB2LvlnDhH_h--563",
        "name": "",
        "type": "default",
        "source_id": "node-0LD-CIEcB2LvlnDhH_h--562",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--520",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-108",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-1",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-36",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-92",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-3",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-1",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-94",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-5",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-3",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-95",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-7",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-3",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-96",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-8",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-3",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-93",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-10",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-1",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-97",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-12",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-10",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-98",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-14",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-10",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-99",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-16",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-10",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-100",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-18",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-10",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-101",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-20",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-10",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-39",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-22",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-36",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-104",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-24",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-38",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-30",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-26",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-29",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-34",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-29",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-33",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-47",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-31",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-29",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-35",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-33",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-22",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-49",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-36",
        "target_id": "node-0LD-CIEcB2LvlnDhH_h--562",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-102",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-36",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-24",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-166",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-36",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-157",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-103",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-38",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-29",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-46",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-42",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-44",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-45",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-44",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-26",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-76",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-52",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-62",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-77",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-53",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-71",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-78",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-54",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-71",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-79",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-55",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-71",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-80",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-56",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-71",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-81",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-57",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-71",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-82",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-58",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-71",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-83",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-59",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-71",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-84",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-60",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-71",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-105",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-62",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-42",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-106",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-71",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-42",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-162",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-115",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-161",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-167",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-153",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-36",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-158",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-157",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-161",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-163",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-161",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-153",
        "fields": {}
      },
      {
        "id": "T7Nqk5fTyHt2_2dhpSra-169",
        "name": "",
        "type": "default",
        "source_id": "node-T7Nqk5fTyHt2_2dhpSra-168",
        "target_id": "node-T7Nqk5fTyHt2_2dhpSra-42",
        "fields": {}
      }
    ],
    "nodeRenderers": {
      "data": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#EFF6FF",
        "borderColor": "#2563EB",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#1E3A8A",
        "accentColor": "#1D4ED8"
      },
      "tool": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#ECFDF3",
        "borderColor": "#079455",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#065F46",
        "accentColor": "#047857"
      },
      "agent": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#F5F3FF",
        "borderColor": "#7C3AED",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#4C1D95",
        "accentColor": "#6D28D9"
      },
      "decision": {
        "width": 80,
        "height": 80,
        "backgroundColor": "#F8FAFC",
        "borderColor": "#64748B",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#334155",
        "accentColor": "#475569"
      },
      "evaluation": {
        "width": 200,
        "height": 60,
        "backgroundColor": "#FFF7ED",
        "borderColor": "#EA580C",
        "borderWidth": 1,
        "borderRadius": 6,
        "textColor": "#7C2D12",
        "accentColor": "#C2410C"
      }
    },
    "edgeRenderers": {
      "default": {
        "strokeColor": "#687785",
        "strokeWidth": 1.6,
        "labelColor": "#465360",
        "labelBackgroundColor": "#FFFFFF",
        "markerEnd": "arrow"
      }
    }
  }
} satisfies Record<DiagramId, WorkflowDocument & { direction: "RIGHT" | "DOWN" }>;
