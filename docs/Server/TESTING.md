# Naming Convention

### Test File Naming
Files that contain tests should start with the prefix `test_`, followed by the name of the file that contains the logic you are testing. For example, if you are testing functionality in `models.py`, the test file should be named `test_models.py`.

**Example:**
- Logic file: `views.py`
- Test file: `test_views.py`

### Test Function Naming
When naming test functions, use descriptive names that follow the pattern:

```python
def test_operation_with_certain_inputs_should_do_something():
