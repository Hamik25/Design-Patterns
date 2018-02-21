# Adapter

---

#### Definition

Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

#### Summary

The Adapter pattern translates one interface \(an object's properties and methods\) to another. Adapters allows programming components to work together that otherwise wouldn't because of mismatched interfaces. The Adapter pattern is also referred to as the Wrapper pattern.

One scenario where Adapters are commonly used is when new components need to be integrated and work together with existing components in application.

Another scenario is refactoring in which parts of the program are rewritten with an improved interface, but the old code still expects the original interface.

![](/assets/adapter.png)

#### Participants

The objects participating in this pattern are:

**Client **-- in sample code: the run\(\) function

* calls into Adapter to request a service

**Adapter **-- in sample code: **ShippingAdapter**

* implements the interface that the client expects or knows

**Adaptee **-- in sample code: **AdvancedShipping**

* he object being adapted

* has a different interface from what the client expects or knows

#### 

#### Sample code in JavaScript

The example code below shows an online shopping cart in which a shipping object is used to compute shipping costs. The old Shippingobject is replaced by a new and improved Shipping object that is more secure and offers better prices.

The new object is named AdvancedShipping and has a very different interface which the client program does not expect.ShippingAdapter allows the client program to continue functioning without any API changes by mapping \(adapting\) the old Shipping interface to the new AdvancedShipping interface.

The logfunction is a helper which collects and displays results..

```js

```

#### 



