import React from 'react';

import Card from 'src/components/card';
import Header from 'src/components/header';
import Section from 'src/components/section';
import CodeViewer from 'src/components/code-viewer';
import TextLighter from 'src/components/text-lighter';
import DocContainer from 'src/components/doc-container';

const ArrayDoc = () => (
  <DocContainer>
    {/* Header */}
    <Header title="Array List" />

    {/* Overview Section */}
    <Section title="Overview">
      <p>
        The <TextLighter>ArrayList</TextLighter>
        class is a custom implementation of an array-like data structure in JavaScript. It provides
        similar functionality to native JavaScript arrays but stores data in an object with numeric
        keys.
      </p>
    </Section>

    {/* Constructor Section */}
    <Section title="Constructor">
      <Card>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '12px',
            fontFamily:
              'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            color: '#1e40af',
          }}
        >
          new ArrayList([initialValues])
        </h3>
        <p style={{ marginBottom: '15px' }}>Creates a new instance of the custom array.</p>

        <h4
          style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#374151',
          }}
        >
          Parameters:
        </h4>
        <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>
            <code>initialValues</code> (optional): Can be one of:
            <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
              <li style={{ marginBottom: '4px' }}>An array of initial values</li>
              <li style={{ marginBottom: '4px' }}>A single non-array value</li>
              <li>If omitted, creates an empty array</li>
            </ul>
          </li>
        </ul>

        <h4
          style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#374151',
          }}
        >
          Example:
        </h4>
        <CodeViewer
          code={`const emptyArray = new ArrayList();
const singleItemArray = new ArrayList(42);
const multiItemArray = new ArrayList([1, 2, 3]);`}
          language="javascript"
        />
      </Card>
    </Section>

    {/* Properties Section */}
    <section style={{ marginBottom: '30px' }}>
      <h2
        style={{
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '15px',
          color: '#222',
        }}
      >
        Properties
      </h2>
      <div
        style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <ul style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}>
            <TextLighter>length</TextLighter>: The number of elements in the array
          </li>
          <li>
            <TextLighter>data</TextLighter>: An object storing the array elements (internal use)
          </li>
        </ul>
      </div>
    </section>

    {/* Methods Section */}
    <section style={{ marginBottom: '30px' }}>
      <h2
        style={{
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '15px',
          color: '#222',
        }}
      >
        Methods
      </h2>

      {/* Core Methods */}
      <h3
        style={{
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '15px',
          color: '#222',
          paddingBottom: '8px',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        Core Array Methods
      </h3>

      {/* get() method */}
      <div
        style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        <h4
          style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '12px',
            fontFamily:
              'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            color: '#1e40af',
          }}
        >
          get(index)
        </h4>
        <p style={{ marginBottom: '15px' }}>Returns the element at the specified index.</p>

        <div style={{ marginBottom: '15px' }}>
          <h5
            style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#374151',
            }}
          >
            Parameters:
          </h5>
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              <code>index</code>: The position to retrieve
            </li>
          </ul>
        </div>

        <div>
          <h5
            style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#374151',
            }}
          >
            Returns:
          </h5>
          <ul style={{ paddingLeft: '20px' }}>
            <li>The element at the specified index or undefined if out of bounds</li>
          </ul>
        </div>
      </div>

      {/* push() method */}
      <div
        style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        <h4
          style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '12px',
            fontFamily:
              'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            color: '#1e40af',
          }}
        >
          push(item)
        </h4>
        <p style={{ marginBottom: '15px' }}>Adds one or more elements to the end of the array.</p>

        <div style={{ marginBottom: '15px' }}>
          <h5
            style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#374151',
            }}
          >
            Parameters:
          </h5>
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              <code>item</code>: The element to add
            </li>
          </ul>
        </div>

        <div>
          <h5
            style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#374151',
            }}
          >
            Returns:
          </h5>
          <ul style={{ paddingLeft: '20px' }}>
            <li>The new length of the array</li>
          </ul>
        </div>
      </div>

      {/* Continue with other methods... */}

      {/* print() method */}
      <div
        style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        <h4
          style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '12px',
            fontFamily:
              'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            color: '#1e40af',
          }}
        >
          print([separator[, prefix[, suffix]]])
        </h4>
        <p style={{ marginBottom: '15px' }}>Prints the array with custom formatting.</p>

        <div style={{ marginBottom: '15px' }}>
          <h5
            style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#374151',
            }}
          >
            Parameters:
          </h5>
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              <code>separator</code> (optional, default=`, `): Element separator
            </li>
            <li>
              <code>prefix</code> (optional, default=`[`): String before elements
            </li>
            <li>
              <code>suffix</code> (optional, default=`]`): String after elements
            </li>
          </ul>
        </div>

        <div>
          <h5
            style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#374151',
            }}
          >
            Returns:
          </h5>
          <ul style={{ paddingLeft: '20px' }}>
            <li>The array instance (for chaining)</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Notes Section */}
    <section style={{ marginBottom: '30px' }}>
      <h2
        style={{
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '15px',
          color: '#222',
        }}
      >
        Notes
      </h2>
      <div
        style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <ul style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}>
            This implementation provides similar functionality to JavaScript arrays but with
            different performance characteristics
          </li>
          <li style={{ marginBottom: '10px' }}>
            Some methods (like sort) are implemented with different algorithms than native arrays
          </li>
          <li>
            The class name <code>_CreateAL</code> suggests it might be an internal/private
            implementation
          </li>
        </ul>
      </div>
    </section>
  </DocContainer>
);

export default ArrayDoc;
